import {ActivityType} from "../enums/activity-type";
import {User} from "./user";
import {Project} from "./project";
import {ActivityEvent} from "./activity-event";
import {ActivityStatus} from "../enums/activity-status";
import {ActivityApprovalType} from "../enums/activity-approval-type";

export class Activity {
    constructor(
        public activityId: string,
        public type: ActivityType,
        public title: string,
        public description: string,
        public createdBy: string,
        public createdAt: Date,
        public projectId: string,
        public status: ActivityStatus,
        public lastUpdatedAt?: Date,
        public lastUpdatedBy?: string,
        public events?: ActivityEvent[]) {}
}

export class ActivitySummaryFlat {
    constructor(
        public activityId: string,
        public type: ActivityType,
        public title: string,
        public createdBy: string,
        public createdAt: Date,
        public projectId: string,
        public status: ActivityStatus,
        public lastUpdatedAt?: Date,
        public lastUpdatedBy?: string,
        public events?: ActivityEvent[],
        public resolvedAt?: Date,
        public resolvedById?: string,
        public resolvedByName?: string) {}
}