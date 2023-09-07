import { useEffect } from "react";

export const Square = () => {
    useEffect(() => {
        alert("conectou");

        return () => {
            alert("desconectou")
        }
    })
    return (
        <div className="m-3 border border-red-500 w-40 h-40 bg-blue-500"></div>
    );
}