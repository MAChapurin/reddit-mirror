import React, { createContext } from "react";
import { usePostData } from "../../hooks/usePostData";


export interface IBestPostContextData {
    id: string;
    author?: string;
    title?:string;
    rating?: number;
    avatar?: string;
    datePostUtc?: number;
    previewImg?: string
}

export const bestPostContext = createContext<IBestPostContextData[]>([]);

export function BestPostContextProvider({children} : {children: React.ReactNode}) {
    const [data] = usePostData();
    return (
        <bestPostContext.Provider value={data}>
            {children}
        </bestPostContext.Provider>
    )
}