import {createContext, Dispatch, SetStateAction} from "react";
import {CacheInterface} from "../interfaces/cache-interface";


export const CacheContext = createContext({
    state: {} as Partial<CacheInterface>,
    setState: {} as Dispatch<SetStateAction<Partial<CacheInterface>>>
});