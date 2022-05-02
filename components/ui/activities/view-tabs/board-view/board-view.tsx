import {FC} from "react";
import {ActivitySummaryFlat} from "../../../../../lib/models/activity";
import Board from "./board";


export const ActivitiesBoardView: FC<{ activities: ActivitySummaryFlat[] }> = ({activities}) => {
    return <Board title="A Board" activities={activities}/>
}