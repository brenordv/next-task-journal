import {FC, ReactNode} from "react";
import {delay} from "../../../lib/utils/async-utils";
import {useCache} from "../../../lib/hooks/use-cache-hook";
import {BaseCacheResolver} from "../base-cache-resolver/base-cache-resolver";


const resolveUserId = async (userId: string): Promise<string> => {
    const data: { [key: string]: string } = {
        "u1": "Breno",
        "u2": "Raccoon"
    }
    console.log(`fetching name for id: ${userId}`);
    await delay(1000 + (Math.random() * 500));
    return data[userId];
}


export const UserNameResolver: FC<{ userId?: string, children?: ReactNode, abbreviated?: boolean }> = props => {
    const {state, setState} = useCache();
    const cache = state.userNameCache ? state.userNameCache : {};
    const baseProps = {
        targetId: props.userId,
        abbreviated: props.abbreviated,
        children: props.children
    }
    return <BaseCacheResolver
        cache={cache} cacheSetCallback={setState} resolveCallback={resolveUserId} {...baseProps}/>
}

export const UserNamePlainTextResolver: FC<{ userId?: string, abbreviated?: boolean }> = props => {
    const {state, setState} = useCache();
    const cache = state.userNameCache ? state.userNameCache : {};
    const baseProps = {
        targetId: props.userId,
        abbreviated: props.abbreviated,
        plainText: true
    }
    return <BaseCacheResolver
        cache={cache} cacheSetCallback={setState} resolveCallback={resolveUserId} {...baseProps}/>
}