import {FC} from "react";
import {Card, Col, Row} from "antd";
import Image from 'next/image'
import {EditOutlined} from "@ant-design/icons";
import { Typography } from 'antd';
const { Text, Title } = Typography;

export const Profile: FC = () => {

    const onEditClick = () => {
        console.log('clicked on edit');
    }

    return (<Row gutter={[48, 8]}>
        <Col span={6}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<Image
                    width={240}
                    height={300}
                    layout={"responsive"}
                    alt="Profile picture for this user"
                    src="/users/avatar/raccoon.png"/>}
                actions={[<EditOutlined key="edit" onClick={onEditClick}/>]}
            >
                <Card.Meta title="Raccoon Ninja" description="A small bio about this user"/>
            </Card>
        </Col>
        <Col span={18}>
            <Title>Profile</Title>
            <Text>Here i will add something. maybe settings or something like that.. </Text>
        </Col>
    </Row>)
}