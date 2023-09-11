import { CountContext } from "../contexts/CountContext";
import { useContext } from "react";

export const OnlineUsers = () => {
    const countCtx = useContext(CountContext);
    const handleBanAll = () => {
       countCtx?.setOnlineCount(0);
    }
    //a gente pode muito bem usar o context para utilizar valores de outras telas, como por exemplo a mudança de telas em um jogo. Para manter-se as mesmas informações poderiamos utilizar o useContext. Também como o use state.
    return (
        <>
        <p>Online: {countCtx?.onlineCount}</p>
        <button onClick={handleBanAll}>Banir</button>
        </>
    );
}