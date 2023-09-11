import { createContext, useState } from "react";
import { ReactNode } from "react";


//Criado o contexto
type CountContentType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void;
}

export const CountContext = createContext<CountContentType | null>(null);
type Props = {
    children: ReactNode;
}
export const CountProvider = ({children}: Props) => {
    const [onlineCount, setOnlineCount] = useState(36);
    return(
        <CountContext.Provider value={{onlineCount, setOnlineCount}}>
            {children}
        </CountContext.Provider>
    );
}