import { Props } from "../types/Card";

export const Card = ({ children} : Props) => {
    return (
        <div className="m-3 p-2 border-2 border-white text-center">
            {children}
        </div>
    );
}