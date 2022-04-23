import {FC, ReactNode} from "react";
import {ActivitySummaryFlat} from "../../lib/models/activity";
import {ActivityType} from "../../lib/enums/activity-type";
import {Table, Tag} from "antd";
import {PresetColorType, PresetStatusColorType} from "antd/lib/_util/colors";
import {dateToString} from "../../lib/type-utils";
import {ActivityStatus} from "../../lib/enums/activity-status";
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    QuestionCircleOutlined
} from "@ant-design/icons";
import {ActivityApprovalType} from "../../lib/enums/activity-approval-type";

const columns = [
    {
        key: "projectName",
        dataIndex: "projectName",
        title: "Project"
    },
    {
        key: "type",
        dataIndex: "type",
        title: "Type",
        render: (colData: ActivityType) => {
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
    },
    {
        key: "title",
        dataIndex: "title",
        title: "Title"
    },
    {
        key: "createdBy",
        dataIndex: "createdBy",
        title: "Created By"
    },
    {
        key: "createdAt",
        dataIndex: "createdAt",
        title: "Created At",
        render: (colData: Date) => dateToString(colData, true)
    },
    {
        key: "status",
        dataIndex: "status",
        title: "Status",
        render: (colData: ActivityStatus) => {
            let color: PresetColorType | PresetStatusColorType  = "cyan";
            let icon: ReactNode = <QuestionCircleOutlined />;
            switch (colData) {
                case ActivityStatus.New:
                    color = "default";
                    icon = <ExclamationCircleOutlined />;
                    break;
                case ActivityStatus.Cancelled:
                    color = "warning";
                    icon = <CloseCircleOutlined />;
                    break;

                case ActivityStatus.Done:
                    color = "success";
                    icon = <CheckCircleOutlined />;
            }

            return <Tag color={color} icon={icon}>{colData}</Tag>
        }
    },
    {
        key: "lastUpdatedAt",
        dataIndex: "lastUpdatedAt",
        title: "Last Updated At",
        render: (colData: Date) => colData? dateToString(colData, true) : null
    },
    {
        key: "lastUpdatedBy",
        dataIndex: "lastUpdatedBy",
        title: "Last Updated By"
    },
    {
        key: "lastApproval",
        dataIndex: "lastApproval",
        title: "Last Analyzed at",
        render: (colData: Date) => colData? dateToString(colData, true) : null
    },
    {
        key: "lastApprovalResult",
        dataIndex: "lastApprovalResult",
        title: "Last Analysis Result",
        render: (colData: ActivityApprovalType) => {
            if (!colData) return null;

            let color: string = "cyan";
            let icon: ReactNode = <QuestionCircleOutlined />;
            switch (colData) {
                case ActivityApprovalType.Approved:
                    color = "#87d068";
                    icon = <CheckCircleOutlined />;
                    break;
                case ActivityApprovalType.Pending:
                    color = "#2db7f5";
                    icon = <ExclamationCircleOutlined />;
                    break;

                case ActivityApprovalType.Rejected:
                    color = "#f50";
                    icon = <CloseCircleOutlined />;
                    break;

            }

            return <Tag color={color}>{colData}</Tag>
        }
    },
    {
        key: "lastApprovedBy",
        dataIndex: "lastApprovedBy",
        title: "Analyzed by"
    },
    {
        key: "resolvedAt",
        dataIndex: "resolvedAt",
        title: "Resolved At",
        render: (colData: Date) => colData? dateToString(colData, true) : null
    },
    {
        key: "resolvedByName",
        dataIndex: "resolvedByName",
        title: "Resolved By"
    }
];

export const Activities: FC<{ activities: ActivitySummaryFlat[] }> = ({activities}) => {
    //https://ant.design/components/table/
    return <Table dataSource={activities} columns={columns} size="small" />
}
