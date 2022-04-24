import {Layout, Menu, Typography} from 'antd';
import React, {FC, ReactNode, useState} from "react";
import {HomeOutlined, MehTwoTone, SolutionOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import {MenuItemPointer} from "../../../lib/enums/menu-item-pointer";
import {isValidEnumValue} from "../../../lib/utils/type-utils";
import {openNotificationWithIcon} from "../../../lib/utils/notification-utils";
import {NotificationType} from "../../../lib/enums/notification-type";
import { CacheProvider } from '../../../lib/contexts/providers/cache-provider';

const { Link } = Typography;
const {Header, Footer, Content, Sider} = Layout;

interface MainLayoutProps {
    children: ReactNode
}

export const AppLayout: FC<MainLayoutProps> = ({children}: MainLayoutProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();
    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    }

    const onMenuItemClick = async ({key, keyPath}: { key: string, keyPath: string[] }) => {
        console.log(key, keyPath);
        if (!isValidEnumValue(MenuItemPointer, key)) {
            console.log("deu ruim");
            openNotificationWithIcon(
                NotificationType.Error,
                "Unknown route",
                `The chosen route ('${key}') is unknown.`,
                'error ticket here');
            return;
        }
        await router.push(key);
    }

    return (
        <CacheProvider>
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" style={{margin: 'auto'}}>
                        <MehTwoTone style={{fontSize: '44px', padding: '8px', display: 'block', margin: 'auto'}}/>
                    </div>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        onClick={onMenuItemClick}>
                        <Menu.Item key={MenuItemPointer.home} icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key={MenuItemPointer.activities} icon={<SolutionOutlined/>}>
                            Activities
                        </Menu.Item>
                        <Menu.Item key={MenuItemPointer.teams} icon={<TeamOutlined/>}>
                            Teams
                        </Menu.Item>
                        <Menu.Item key={MenuItemPointer.profile} icon={<UserOutlined/>}>
                            Profile
                        </Menu.Item>
                        <Menu.Item key={"/fooooo"} icon={<UserOutlined/>}>
                            Profile fake
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            {children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        NTJ - Next Task Journal by <Link href="https://raccoon.ninja" target="_blank">🦝.ninja</Link>
                    </Footer>
                </Layout>
            </Layout>
        </CacheProvider>
    );
};