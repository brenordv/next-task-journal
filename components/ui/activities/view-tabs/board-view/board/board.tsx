import {FC} from "react";
import {Card} from "antd";
import {ActivitySummaryFlat} from "../../../../../../lib/models/activity";
import ActivityCard from "../card";
import {activityTypeToTag} from "../../../../../../lib/parsers/activity-type-parsers";

interface BoardProps {
    title: string,
    activities: ActivitySummaryFlat[]
}
//https://react-dnd.github.io/react-dnd/about
//https://react-dnd.github.io/react-dnd/examples/dustbin/multiple-targets
//https://codesandbox.io/s/github/react-dnd/react-dnd/tree/gh-pages/examples_ts/01-dustbin/multiple-targets?from-embed=&file=/src/Dustbin.tsx
export const Board: FC<BoardProps> = ({title, activities}) => {
    return (
        <Card title={title} bordered={false} style={{width: 350}} >
            {activities.map(a => (
                <ActivityCard
                    key={a.activityId}
                    activity={a}
                    extra={activityTypeToTag(a.type)}
                    style={{marginBottom: "8px"}} />))}
        </Card>
    );
}