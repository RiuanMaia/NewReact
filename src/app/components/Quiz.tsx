import { quizList } from "../data/quizList";
import { QuizQuest } from "./quizQuest";
export const Quiz = () => {
    let idQuest: number = 0;

    return (
        <div className=" p-2 bg-gray-100 w-96 h-auto rounded-md border border-gray-400 flex flex-col">
            <h1 className="text-xl font-bold text-black">Quiz de Culinária</h1>
            <hr></hr>
            <QuizQuest indice={idQuest}/>
        </div>
        
    );
}