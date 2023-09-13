import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";

export const HeaderPost = () => {
    const [titleInput, setTitleInput] = useState("");
    const [bodyArea, setBodyArea] = useState("");

    const postCtx = useContext(PostContext);
    const handleAddPost = () => {
        if(titleInput && bodyArea){
            postCtx?.addPost(titleInput, bodyArea);
        }
        setBodyArea("");
        setTitleInput("");
    }
    return (
        <header className="p-2 font-bold font-mono border-b border-gray-400">
            <h1 className="">Título da página</h1>
            <div className="flex flex-col">
                <input
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
                className="text-sm border border-gray-400 rounded-md px-2 py-1 mb-1 outline-none" 
                type="text"
                placeholder="Digite um título"
                />
                <textarea
                value={bodyArea}
                onChange={e => setBodyArea(e.target.value)} 
                rows={4} 
                className="h-24 text-sm border border-gray-400 rounded-md px-2 py-1 mb-1 outline-none"
                placeholder="Digite seu comentário"></textarea>
                <button onClick={handleAddPost} className="bg-blue-400 rounded-md text-white border border-blue-700">Adicionar</button>
            </div>
        </header>
    );
}