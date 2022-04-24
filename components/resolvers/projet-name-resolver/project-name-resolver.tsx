import {FC, ReactNode} from "react";
import {delay} from "../../../lib/utils/async-utils";
import {useCache} from "../../../lib/hooks/use-cache-hook";
import {BaseCacheResolver} from "../base-cache-resolver/base-cache-resolver";

const resolveProjectId = async (userId: string): Promise<string> => {
    const data: { [key: string]: string } = {
        "p1": "Super Project",
        "p2": "Medium Project"
    }
    console.log(`fetching project name for id: ${userId}`);
    await delay(1000 + (Math.random() * 500));
    return data[userId];
}


export const ProjectNameResolver: FC<{ projectId?: string, children?: ReactNode }> = props => {
    const {state, setState} = useCache();
    const cache = state.projectNameCache ? state.projectNameCache : {};
    const baseProps = {
        targetId: props.projectId,
        children: props.children
    }
    return <BaseCacheResolver
        cache={cache} cacheSetCallback={setState} resolveCallback={resolveProjectId} {...baseProps}/>
}
