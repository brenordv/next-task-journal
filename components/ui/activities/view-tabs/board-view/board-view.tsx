import {FC} from "react";
import {ActivitySummaryFlat} from "../../../../../lib/models/activity";


export const ActivitiesBoardView: FC<{ activities: ActivitySummaryFlat[] }> = ({activities}) => {
    //https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
    return <p>A trello-like board will go here.</p>
}