import {Props} from "@/app/types/Rate2";
export const Rating2 = ({rate = 0}: Props) => {

    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;

    
    const emojiList = [" ", "😖","🥺","🙃","🙂","😀"];

    const qtRateInt = Math.floor(rate);

    const emojis = `${emojiList[qtRateInt]}`.repeat(qtRateInt) + `${emojiList[1]}`.repeat(5 - (qtRateInt));

    return (
        <div className="flex justify-beetwen">
            <div className="bg-gray-500 rounded shadow-md flex justify-center items-center text-white text-5xl p-3 ">
                {rate.toFixed(1)}
            </div>
            <div className="bg-indigo-700 ml-3 p-3 shadow-lg rounded text-white text-5xl">
                {emojis}
            </div>
        </div>
    );
}