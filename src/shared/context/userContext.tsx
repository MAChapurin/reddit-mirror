import React, { createContext } from "react";
// import { useUserData } from "../../hooks/useUserData";

export interface IUserContextData {
    name?: string;
    iconImg?: string;
    loading?: boolean
}

// export const userContext = createContext<IUserContextData>({});

// export function UserContextProvider({children} : {children: React.ReactNode}) {
//     const [data] = useUserData();
//     return (
//         <userContext.Provider value={data}>
//             {children}
//         </userContext.Provider>
//     )
// }