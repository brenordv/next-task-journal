import {notification, Typography} from 'antd';
import {NotificationType} from "./enums/notification-type";
import {isValidEnumValue} from "./type-utils";
import {ERROR_ICON, NEUTRAL_ICON, SUCCESS_ICON, WARNING_ICON} from "./constants/icons";
import {CopyOutlined} from "@ant-design/icons";
import {copyToClipboard} from "./clipboard-utils";

const {Text} = Typography;

export const openNotificationWithIcon = (
    type: NotificationType, title: string, description: string,
    errorTicket?: string, forceUseDuration?: boolean): void => {
    if (!isValidEnumValue(NotificationType, type)) {
        throw new Error(`The value '${type}' is not a  valid notification type.`);
    }

    let icon;
    let notifyFunc;
    let duration = 5;
    switch (type) {
        case NotificationType.Error:
            notifyFunc = notification.error;
            icon = ERROR_ICON;
            if (!forceUseDuration)
                duration = 0;
            break;

        case NotificationType.Success:
            notifyFunc = notification.success;
            icon = SUCCESS_ICON;
            duration = 4.5;
            break;

        case NotificationType.Warning:
            notifyFunc = notification.warning;
            icon = WARNING_ICON;
            break

        case NotificationType.Information:
        default:
            notifyFunc = notification.info;
            icon = NEUTRAL_ICON;
    }

    const onClickCopy = async (text: string) => {
        const result = await copyToClipboard(text);
        if (result) {
            openNotificationWithIcon(
                NotificationType.Success,
                "Support ticket copied",
                `Support ticket '${text}' copied to clipboard! You can now pass it on to tech support.`);
            return;
        }
        openNotificationWithIcon(
            NotificationType.Error,
            "Failed to copy support ticket",
            "Could not copy support ticket to clipboard. Please, copy it manually.",
            undefined, true);
        console.log('copy to clipboard result', result);
    }

    let msg = <Text>{description}</Text>;
    if (errorTicket) {
        const ticket = "507f1f77bcf86cd799439011";
        msg = <>{msg}<br/><Text>Support Ticket: </Text><Text code>{ticket} <CopyOutlined
            onClick={() => onClickCopy(ticket)}/></Text></>;
    }


    notifyFunc({
        icon: icon,
        message: title,
        description: msg,
        duration: duration,
        style: {
            width: 400,
        }
    });
};