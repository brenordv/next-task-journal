import {Layout, Menu, Typography, MenuProps} from 'antd';
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
type MenuItem = Required<MenuProps>['items'][number];

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

    const getItem = (
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem => {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const menuItems: MenuProps['items'] = [
        getItem("Home", MenuItemPointer.home, <HomeOutlined />),
        getItem("Activities", MenuItemPointer.activities, <SolutionOutlined />),
        getItem("Teams", MenuItemPointer.teams, <TeamOutlined />),
        getItem("Profile", MenuItemPointer.profile, <UserOutlined />),
        getItem("Profile fake", "/fooooo", <UserOutlined />)
    ]

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
                        onClick={onMenuItemClick}
                        items={menuItems} />
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