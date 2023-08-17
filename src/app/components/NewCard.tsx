import { Props } from "../types/NewCard";

export const NewCard = ({frase, autor}: Props) => {
    
    return (
        <>  
            <div className="m-3 p-2 border-2 border-white text-center">
                {autor && "ta rolando"}
                <h2 className="text-lg">{frase ? frase : "Frase padrão."}</h2>
                <h3 className="text-sm text-right">{autor ? "- " + autor : "- Autor desconhecido."}</h3>
            </div>
        </>
    );
}