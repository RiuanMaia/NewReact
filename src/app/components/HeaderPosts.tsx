import { useContext } from "react";
import { HPostContext } from "../contexts/HeaderPostsContext";
export const HeaderPosts = () => {
    const HPost = useContext(HPostContext)
    return (
        <div className="">
            <h1 className="text-3xl text-center bg-gray-100 rounded-md m-3 p-2 text-black">Título da Página</h1>
            <ul>
                {HPost?.post && 
                HPost?.post.map(item => (
                    <li className="ml-3 mt-1 p-1 bg-gray-700" key={item.id}>{item.id} - {item.title} <br></br>
                    {item.text}
                    </li>
                ))
                }
            </ul>
        </div>
        
    );
}