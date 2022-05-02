import {FC} from "react";
import {ActivitySummaryFlat} from "../../../../../../lib/models/activity";
import {Avatar, Card, Tooltip, Typography} from "antd";
import {ProjectNameResolver} from "../../../../../resolvers/projet-name-resolver/project-name-resolver";
import * as React from "react";
import {UserNamePlainTextResolver} from "../../../../../resolvers/user-name-resolver/user-name-resolver";
import {CardAvatar} from "./avatar/avatar";

const {Text, Title} = Typography;

export const ActivityCard: FC<{ activity: ActivitySummaryFlat, style?: React.CSSProperties, extra?: React.ReactNode }> = ({activity, style, extra}) => {
    const avatars = [];

    if (activity.lastUpdatedBy) {
        const lastUpdatedByText = <Text style={{color: 'white'}}>Last Updated By <UserNamePlainTextResolver userId={activity.lastUpdatedBy}/></Text>
        avatars.push(<CardAvatar userId={activity.lastUpdatedBy} tooltip={lastUpdatedByText}/>);
    }

    const createdByText = <Text style={{color: 'white'}}>Created By <UserNamePlainTextResolver userId={activity.createdBy}/></Text>
    avatars.push(<CardAvatar userId={activity.createdBy} tooltip={createdByText}/>);

    return (
        <Card hoverable style={style} actions={[extra, <></>, <>{avatars}</>]}>
            <Title level={5}>{activity.title}</Title>
            <ProjectNameResolver projectId={activity.projectId} textProps={{type: "secondary"}}/>
        </Card>)
}