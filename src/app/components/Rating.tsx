import { Props } from "../types/Rate";
export const Rating = ({rate = 0}: Props) => {
    const heart = "❤";
    let rateList = ["🖤","🖤","🖤","🖤","🖤"];
    if(rate < 0) {
        rate = 0;
    }else if(rate > 5) {
        rate = 5;
    }
    let rateInt = Math.floor(rate);
    //for(let i = 0; i < rateInt; i++) {
        //rateList[i] = heart;
    //}
    //poderiamos ter feito dessa forma também.
    const hearts = "❤".repeat(rateInt) + "🖤".repeat(5-rateInt);
    
    return (
        <div className="flex justify-beetwen">
            <div className="bg-gray-500 rounded shadow-md flex justify-center items-center text-white text-5xl p-3 ">
                {rate.toFixed(1)}
            </div>
            <div className="bg-indigo-700 ml-3 p-3 shadow-lg rounded text-white text-5xl">
                {/* {rateList} */}
                {hearts}
            </div>
        </div>
    );
}