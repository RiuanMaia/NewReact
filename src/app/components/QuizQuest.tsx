import { quizList } from "../data/quizList";

export const QuizQuest = (indice: number) => {
    return (
        <div className="p-2 text-black font">
            <h1>{quizList[indice].id}. {quizList[indice].question}</h1>
        </div>
    );
}