import {Props} from "../types/Person"

export const Person = ({nome, idade, pro = "Um Nada"}: Props) => {
    return (
        <div className="flex m-3 p-3 items-center">
            <img className="rounded-full" src="http://via.placeholder.com/150" alt={nome}></img>
            <div className="ml-3">
                <h1>Name: {nome}</h1>
                <h2>Idade: {idade} Anos</h2>
                <h2>Profissão: {pro}</h2>
                
            </div>
        </div>
    );
}