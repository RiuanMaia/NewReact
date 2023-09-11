import { createContext } from "react";


//Criado o contexto
type CountContentType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void;
}
export const CountContext = createContext<CountContentType | null>(null);