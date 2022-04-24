import {useContext} from "react";
import {CacheContext} from "../contexts/cache-context";


export const useCache = () => {
    const context = useContext(CacheContext);
    if (!context){
        throw new Error("Hook 'useUserNameCache' must be used within 'UserNameCacheContext'.");
    }

    return context;
}