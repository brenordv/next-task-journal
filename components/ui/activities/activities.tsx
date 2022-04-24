import {FC} from "react";
import {ActivitySummaryFlat} from "../../../lib/models/activity";
import {ActivityViewTabs} from "./view-tabs/view-tabs";

export const Activities: FC<{ activities: ActivitySummaryFlat[] }> = ({activities}) => {
    return <ActivityViewTabs activities={activities}/>
}


