import { Student } from "../types/Student";

type Props = {
    students: Student[];
}

export const TableList = ({ students }: Props) => {


    return (
        
           
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Name</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Grade 1</th>
                    <th className="p-3">Grade 2</th>
                    <th className="p-3">Grade Final</th>
                </tr>
            </thead>
            <tbody>
                {students.map(item => (
                    <tr className="text-gray-800 bg-gray-400 border-b border-gray-600" key={item.id}>
                        <td className="flex">
                            <img className="rounded-full w-20 m-3" src={item.avatar} alt={item.name}/>
                            <div className="m-4 flex flex-col justify-center">
                                <h2 className="font-bold">{item.name}</h2>
                                <h2>{item.email}</h2>
                            </div>
                        </td>
                        
                        <td className = "text-left p-3">
                            {item.active && <div className="border border-gray-500 bg-green-400 rounded-md inline-block px-2 py-1 text-white">Active</div>}
                            {!item.active && <div className="border border-gray-500 bg-red-400 rounded-md inline-block px-2 py-1 text-white">Inactive</div>}
                        </td>

                        <td className="text-left p-3">
                            {(item.grade1).toFixed(1)}
                        </td>

                        <td className="text-left p-3">
                            {(item.grade2).toFixed(1)}
                        </td>

                        <td className="text-left p-3">   
                            {item.active ? ((item.grade1 + item.grade2)/2).toFixed(2) : "--"}   
                        </td>
        
                    </tr>
                ))}
            </tbody>
        </table>
       
        
    );

}