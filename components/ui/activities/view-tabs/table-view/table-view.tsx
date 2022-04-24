import {FC, ReactNode} from "react";
import {Table, Tag, Tooltip, Typography} from "antd";
import {ProjectNameResolver} from "../../../../resolvers/projet-name-resolver/project-name-resolver";
import {ActivityType} from "../../../../../lib/enums/activity-type";
import {PresetColorType, PresetStatusColorType} from "antd/lib/_util/colors";
import {UserNameResolver} from "../../../../resolvers/user-name-resolver/user-name-resolver";
import {dateToString} from "../../../../../lib/utils/type-utils";
import {ActivityStatus} from "../../../../../lib/enums/activity-status";
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    QuestionCircleOutlined
} from "@ant-design/icons";
import {ActivitySummaryFlat, ActivitySummaryFlatTableData} from "../../../../../lib/models/activity";
import {ActivityApprovalType} from "../../../../../lib/enums/activity-approval-type";
import {TextExpandable} from "../../../../shared/text-expandable";
import {ActivityEventTableData} from "../../../../../lib/models/activity-event";

const {Text} = Typography;

const columns = [
    {
        key: "projectName",
        dataIndex: "projectId",
        title: "Project",
        render: (colData: string) => <ProjectNameResolver projectId={colData}/>
    },
    {
        key: "title",
        dataIndex: "title",
        title: "Title"
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
        key: "createdBy",
        dataIndex: "createdBy",
        title: "Created By",
        render: (colData: string) => <UserNameResolver userId={colData}/>
    },
    {
        key: "createdAt",
        dataIndex: "createdAt",
        title: "Created At",
        render: (colData: Date) => (
            <Tooltip placement="topLeft" title={dateToString(colData, true)}>
                {dateToString(colData, false)}
            </Tooltip>
        )
    },
    {
        key: "status",
        dataIndex: "status",
        title: "Status",
        render: (colData: ActivityStatus) => {
            let color: PresetColorType | PresetStatusColorType = "cyan";
            let icon: ReactNode = <QuestionCircleOutlined/>;
            switch (colData) {
                case ActivityStatus.New:
                    color = "default";
                    icon = <ExclamationCircleOutlined/>;
                    break;
                case ActivityStatus.Cancelled:
                    color = "warning";
                    icon = <CloseCircleOutlined/>;
                    break;

                case ActivityStatus.Done:
                    color = "success";
                    icon = <CheckCircleOutlined/>;
            }

            return <Tag color={color} icon={icon}>{colData}</Tag>
        }
    },
    {
        key: "lastUpdated",
        dataIndex: "lastUpdatedAt",
        title: "Last Updated",
        render: (colData: Date, record: ActivitySummaryFlat) => {
            if (!colData) return null;
            return (
                <>
                    <UserNameResolver userId={record.lastUpdatedBy}>
                        <br/>
                        <Text style={{fontSize: "10px"}}>{dateToString(colData, true)}</Text>
                    </UserNameResolver>
                </>);
        }
    }
];


const activityEventsColumns = [
    {
        key: "eventDate",
        dataIndex: "eventDate",
        title: "Event Date",
        render: (colData: Date) => dateToString(colData, true)
    },
    {
        key: "analyzedBy",
        dataIndex: "analyzedBy",
        title: "Analyzed by",
        render: (colData: string) => <UserNameResolver userId={colData}/>
    },
    {
        key: "analysisResult",
        dataIndex: "result",
        title: "Result",
        render: (colData: ActivityApprovalType) => {
            let color: string = "default";
            let icon: ReactNode = <QuestionCircleOutlined/>;
            switch (colData) {
                case ActivityApprovalType.Approved:
                    color = "#87d068";
                    icon = <CheckCircleOutlined/>;
                    break;
                case ActivityApprovalType.Pending:
                    color = "#2db7f5";
                    icon = <ExclamationCircleOutlined/>;
                    break;

                case ActivityApprovalType.Rejected:
                    color = "#f50";
                    icon = <CloseCircleOutlined/>;
                    break;
            }
            return <Tag color={color}>{colData}</Tag>
        },
    },
    {
        key: "justification",
        dataIndex: "justification",
        title: "Justification",
        render: (colData: string) => {
            if (!colData) return null;
            return (
                <TextExpandable>{colData}</TextExpandable>
            )
        }
    },
]

export const ActivitiesTableView: FC<{ activities: ActivitySummaryFlat[] }> = ({activities}) => {
    //https://ant.design/components/table/
    const data: ActivitySummaryFlatTableData[] = []
    const eventData: ActivityEventTableData[] = []
    for (let i = 0; i < activities.length; i++) {
        const activity = activities[i];
        data.push({
            key: i,
            ...activity
        });

        if (!activity.events) {
            continue;
        }

        for (let j = 0; j < activity.events.length; j++) {
            const event = activity.events[j];
            eventData.push({
                key: j,
                ...event
            })
        }
    }

    const expandedRowRender = (row: ActivitySummaryFlatTableData) => {
        const filtered = eventData.filter(ed => ed.activityId === row.activityId);
        return (
            <Table dataSource={filtered} columns={activityEventsColumns} size="small" pagination={false}/>
        );
    }

    return <Table dataSource={data} columns={columns} expandable={{expandedRowRender}} size="middle"/>
}