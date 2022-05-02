import {Dispatch, FC, ReactNode, SetStateAction, useEffect, useState} from "react";

import {Skeleton, Typography} from "antd";
import {CacheInterface} from "../../../lib/interfaces/cache-interface";
import {TextProps} from "antd/lib/typography/Text";
import {onlyCapitalLetters} from "../../../lib/utils/string-utils";

const {Text} = Typography;


export const BaseCacheResolver: FC<{
    cache: { [key: string]: string },
    cacheSetCallback: Dispatch<SetStateAction<Partial<CacheInterface>>>,
    resolveCallback: Function,
    targetId?: string,
    children?: ReactNode,
    textProps?: TextProps,
    plainText?: boolean,
    abbreviated?: boolean
}> = props => {
    const [loading, setLoading] = useState(true);
    const [cacheInfo, setCacheInfo] = useState("Uninformed");
    const {cache, cacheSetCallback, resolveCallback, targetId, children, textProps, plainText, abbreviated} = props;

    const txtProps = !textProps? {} : textProps;

    useEffect(() => {
        if (!targetId) {
            setLoading(false);
            return;
        }

        if (cache && cache[targetId]) {
            setCacheInfo(cache[targetId]);
            setLoading(false);
        } else {
            (async () => {
                const resolvedName = await resolveCallback(targetId);
                if (!resolvedName) return;
                cacheSetCallback((prev) => ({...prev, ...{targetId: resolvedName}}));
                setCacheInfo(resolvedName);
                setLoading(false);
            })();
        }
    }, [targetId]);

    let finalCacheInfo = abbreviated? onlyCapitalLetters(cacheInfo) : cacheInfo;

    const result = plainText
        ? <>{finalCacheInfo}{children}</>
        : <><Text {...txtProps}>{finalCacheInfo}</Text>{children}</>;


    return (
        <Skeleton loading={loading} paragraph={false} active>
            {result}
        </Skeleton>
    )
}