import {ActivityType} from "../enums/activity-type";
import {PresetColorType} from "antd/lib/_util/colors";
import {Tag} from "antd";

export const activityTypeToTag = (colData: ActivityType) => {
    let color: PresetColorType = "cyan";
    switch (colData) {
        case ActivityType.Deal:
            color = "orange";
            break;
        case ActivityType.Task:
            color = "geekblue";
            break;
    }

    return <Tag color={color}>{colData}</Tag>
}