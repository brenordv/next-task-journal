import {ActivityType} from "../enums/activity-type";
import {User} from "./user";
import {Project} from "./project";
import {ActivityApproval} from "./activity-approval";
import {ActivityStatus} from "../enums/activity-status";
import {ActivityApprovalType} from "../enums/activity-approval-type";

export class Activity {
    constructor(
        public activityId: string,
        public type: ActivityType,
        public title: string,
        public description: string,
        public createdBy: User,
        public createdAt: Date,
        public project: Project,
        public status: ActivityStatus,
        public lastUpdatedAt?: Date,
        public lastUpdatedBy?: User,
        public approvals?: ActivityApproval[],
        public resolution?: string,
        public resolvedAt?: Date,
        public resolvedBy?: User) {}
}

export class ActivitySummaryFlat {
    constructor(
        public activityId: string,
        public type: ActivityType,
        public title: string,
        public createdById: string,
        public createdBy: string,
        public createdAt: Date,
        public projectId: string,
        public projectName: string,
        public status: ActivityStatus,
        public lastUpdatedAt?: Date,
        public lastUpdatedById?: string,
        public lastUpdatedBy?: string,
        public lastApproval?: Date,
        public lastApprovalResult?: ActivityApprovalType,
        public lastApprovedById?: string,
        public lastApprovedBy?: string,
        public resolvedAt?: Date,
        public resolvedById?: string,
        public resolvedByName?: string) {}
}