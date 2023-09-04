import { useState } from "react";
import { Question } from "@/app/types/Question";

type Props = {
    question: Question,
    count: number,
    onAnswer: (answer: number) => void;
}


export const Quiz = ({question, count, onAnswer}: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const handleChecked = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            setTimeout(() => {
                onAnswer(key)
                setSelectedAnswer(null);
                },1000);
        }
    }
    return (
        <div className="w-full max-w-md bg-white text-black ">
            <div className="p-2 text-2xl">
                {count}. {question.question}
            </div>
            <div className="">
                {question.options.map((item, key) => (
                    <div 
                    key={key} 
                    className={`px-2 py-1 m-1 bg-blue-100 border border-blue-300  text-lg rounded-md
                    ${selectedAnswer !== null ? "cursor-auto " : " cursor-pointer hover:opacity-60"}
                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && "bg-green-100 border-green-300"}
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && "bg-red-100 border-red-300"}
                    `}
                    
                    onClick={() => handleChecked(key)}
                    >
                    {item}
                    </div>
                ))}
            </div>
        </div>
    );
}