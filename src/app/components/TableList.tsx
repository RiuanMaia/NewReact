import { Student } from "../types/Student";

type Props = {
    students: Student[]
}

export const TableList = ({ students }: Props) => {

    let AlunoName = <div>{}</div>
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

            </tbody>
        </table>
       
        
    );

}