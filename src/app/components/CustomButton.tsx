type Props = {
    label: string,
    onClick: () => void;
}


export const CustomButton = ({label, onClick}: Props) => {

    return (
        <button  onClick={onClick} className="p-3 text-center bg-blue-500 border border-gray-800 rounded-md">{label}</button>
    );
}