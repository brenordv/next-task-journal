import type {NextPage} from 'next'
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {ActivitySummaryFlat} from "../../lib/models/activity";
import {ActivityType} from "../../lib/enums/activity-type";
import {User} from "../../lib/models/user";
import {Project} from "../../lib/models/project";
import {ActivityStatus} from "../../lib/enums/activity-status";
import {ActivityApprovalType} from "../../lib/enums/activity-approval-type";
import Activities from "../../components/ui/activities";
import {ActivityEvent} from "../../lib/models/activity-event";

const ActivitiesPage: NextPage = ({activities}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <Activities activities={JSON.parse(activities)}/>
}

export const getStaticProps: GetStaticProps = async () => {
    const u = new User("u1", "Breno", "exemplo_u1@email.com");
    const u2 = new User("u2", "Raccoon", "exemplo_u2@email.com");
    const p = new Project("p1", "Super Project", true);

    const activities: ActivitySummaryFlat[] = [
        new ActivitySummaryFlat(
            "a1",
            ActivityType.Deal,
            "Activity 01 - About that business and that stuff",
            u.id,
            new Date(),
            p.id,
            ActivityStatus.New
        ),
        new ActivitySummaryFlat(
            "a2",
            ActivityType.Deal,
            "Activity 02 - About that other business and that stuff",
            u2.id,
            new Date(),
            p.id,
            ActivityStatus.Cancelled,
            new Date(),
            u.id,
        ),
        new ActivitySummaryFlat(
            "a3",
            ActivityType.Task,
            "Activity 03 - Yet about that other business and that stuff",
            u2.id,
            new Date(),
            p.id,
            ActivityStatus.Done,
            new Date(),
            u.id,
            [
                new ActivityEvent(
                    "aa1",
                    "a3",
                    new Date(),
                    ActivityApprovalType.Approved,
                    u.id,
                    "This is fine."
                ),
                new ActivityEvent(
                    "aa2",
                    "a3",
                    new Date(),
                    ActivityApprovalType.Pending,
                    u.id,
                    "Maybe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi justo, iaculis vitae metus sit amet, vestibulum elementum orci. Mauris ac sapien ultricies, rutrum odio nec, accumsan risus. Nam erat sapien, dapibus non nibh eget, dignissim tempor dui."
                )
            ]
        )
    ]

    return {
        props: {
            activities: JSON.stringify(activities)
        }
    }
}

export default ActivitiesPage


