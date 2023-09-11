import { useContext } from "react";
import { ULogedContext } from "../contexts/UserLogedContext";
export const UserLoged = () => {
    const uLoged = useContext(ULogedContext);
    const handleHiddenName = () => {
        {uLoged?.setUserLoged("")}
    }
    return (
        <header>
            <h1 className="text-3xl m-3">Título da página</h1>
            <h1>Usuário Logado: {uLoged?.UserLoged}</h1>
            <button onClick={handleHiddenName} className="bg-gray-400 border border-white-400 rounded md px-3 py-2 text-white">Hidden</button>
        </header>
        );
}