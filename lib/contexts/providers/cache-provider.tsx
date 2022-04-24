import React, {useState} from "react";
import {CacheInterface} from "../../interfaces/cache-interface";
import {CacheContext} from "../cache-context";


export const CacheProvider = ({children, value = {} as CacheInterface}: {
    children: React.ReactNode,
    value?: Partial<CacheInterface>
}) => {
    const [state, setState] = useState(value);
    return <CacheContext.Provider value={{state, setState}}>{children}</CacheContext.Provider>;
};