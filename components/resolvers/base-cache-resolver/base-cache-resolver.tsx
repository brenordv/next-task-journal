import {Dispatch, FC, ReactNode, SetStateAction, useEffect, useState} from "react";

import {Skeleton, Typography} from "antd";
import {CacheInterface} from "../../../lib/interfaces/cache-interface";

const {Text} = Typography;


export const BaseCacheResolver: FC<{
    cache: { [key: string]: string },
    cacheSetCallback: Dispatch<SetStateAction<Partial<CacheInterface>>>,
    resolveCallback: Function,
    targetId?: string,
    children?: ReactNode
}> = props => {
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState("Uninformed");
    const {cache, cacheSetCallback, resolveCallback, targetId, children} = props;

    useEffect(() => {
        if (!targetId) {
            setLoading(false);
            return;
        }

        if (cache && cache[targetId]) {
            setUserName(cache[targetId]);
            setLoading(false);
        } else {
            (async () => {
                const newUserName = await resolveCallback(targetId);
                if (!newUserName) return;
                cacheSetCallback((prev) => ({...prev, ...{userId: newUserName}}));
                setUserName(newUserName);
                setLoading(false);
            })();
        }
    }, [targetId]);

    return (
        <Skeleton loading={loading} paragraph={false} active>
            <Text>{userName}</Text>{children}
        </Skeleton>
    )
}