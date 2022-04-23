import {ActivityApprovalType} from "../enums/activity-approval-type";
import {User} from "./user";

export class ActivityApproval {
    constructor(
        public analyzedAt: Date,
        public analysisResult: ActivityApprovalType,
        public analyzedBy: User,
        public justification?: string) {}
}