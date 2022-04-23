import {ActivityApprovalType} from "../enums/activity-approval-type";

export class ActivityEvent {
    constructor(
        public id: string,
        public eventDate: Date,
        public result: ActivityApprovalType,
        public analyzedBy: string,
        public justification?: string) {
    }
}