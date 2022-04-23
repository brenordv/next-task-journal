import {notification, Typography} from 'antd';
import {NotificationType} from "./enums/notification-type";
import {isValidEnumValue} from "./type-utils";
import {ERROR_ICON, NEUTRAL_ICON, SUCCESS_ICON, WARNING_ICON} from "./constants/icons";

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

    let msg = <Text>{description}</Text>;
    if (errorTicket) {
        const ticket = "507f1f77bcf86cd799439011";
        msg = <>{msg}<br/><Text>Support Ticket: </Text><Text code copyable>{ticket}</Text></>;
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