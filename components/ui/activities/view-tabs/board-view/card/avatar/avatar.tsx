import {FC, ReactNode} from "react";
import {Avatar, Tooltip} from "antd";
import {UserNamePlainTextResolver} from "../../../../../../resolvers/user-name-resolver/user-name-resolver";


export const CardAvatar: FC<{userId: string, tooltip?:ReactNode}> = ({userId, tooltip}) => {
    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#fde3cf', '#87d068'];

    const color = colorList[Math.floor(Math.random() * colorList.length)];

    let avatar = (
        <Avatar shape="square" size="small" style={{backgroundColor: color, marginLeft: "2px", marginRight: "2px"}}>
            <UserNamePlainTextResolver userId={userId} abbreviated />
        </Avatar>
    );

    if (tooltip) {
       avatar = <Tooltip placement="top" title={tooltip}>{avatar}</Tooltip>;
    }

    return avatar;
}