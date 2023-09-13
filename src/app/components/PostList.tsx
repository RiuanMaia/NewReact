import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const PostList = () => {
    const postCtx = useContext(PostContext);
    return (
        <div className="border-b border-gray-400">
            {postCtx?.posts.map(item => (
                <div className="font-mono border-b border-gray-300 p-3" key={item.id}>
                    <div className="font-bold mb-2">{item.title}</div>
                    <div className="text-sm">{item.body}</div>
                </div>

            ))}
        </div>
    );
}