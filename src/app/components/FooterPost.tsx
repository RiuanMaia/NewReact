import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const FooterPost = () => {
    const postCtx = useContext(PostContext);
    return (
        <footer className="font-mono p-2">
            <h2>Quantidade de posts: {postCtx?.posts.length}</h2>
        </footer>
    );
}