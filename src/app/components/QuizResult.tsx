import { useState } from "react";
import { questions } from "../data/questions";
type Props = {
    answers: number[]
}
export const QuizResult = ({ answers}: Props) => {
    const [correctQuestion, setCorrectQuestion] = useState<number>(0);
    return (
        <div className="bg-white">
            {questions.map((item, index) => (
                <div className="p-3 text-black border-b border-gray-300">
                    <div>{index + 1}. {item.question}</div>
                    {answers[index] === item.answer ? "Acertou!": "Errou!"} - correta: {item.options[item.answer]}
                </div>
                
            ))}
            
        </div>
    );
}