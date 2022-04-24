import {ActivityApprovalType} from "../enums/activity-approval-type";

export class ActivityEvent {
    constructor(
        public id: string,
        public activityId: string,
        public eventDate: Date,
        public result: ActivityApprovalType,
        public analyzedBy: string,
        public justification?: string) {
    }
}

export class ActivityEventTableData extends ActivityEvent{
    constructor(
        public key: number,
        id: string,
        activityId: string,
        eventDate: Date,
        result: ActivityApprovalType,
        analyzedBy: string,
        justification?: string) {
        super(id, activityId, eventDate, result, analyzedBy, justification);
    }
}