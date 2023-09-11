import { createContext, use, useState } from "react";
import { ReactNode } from "react";

type UserLogedType = {
    UserLoged: string;
    setUserLoged: (string: string) => void;
}
type Props = {
    children: ReactNode;
}
export const ULogedContext = createContext<UserLogedType | null>(null);

export const ULogedProvider = ({children}: Props) => {
    const [UserLoged, setUserLoged] = useState("Riuan");
    return(
        <ULogedContext.Provider value={{UserLoged, setUserLoged}}>
            {children}
        </ULogedContext.Provider>
    );
}