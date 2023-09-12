import { createContext, useState, ReactNode } from "react";
type Post = {
    id: number,
    title: string,
    text: string
}
type HeaderPostsContextType = {
    post: Post[],
    setPost: (post: Post[]) => void;
}   
type Props = {
    children: ReactNode;
}
export const HPostContext = createContext<HeaderPostsContextType | null>(null);

export const HPostProvider = ({children}: Props) => {
    const [post, setPost] = useState([{id: 1, title: "primeiro", text: "primeiro texto"}, {id: 2, title: "segundo", text: "segundo texto"}])
    return(
        <HPostContext.Provider value={{post, setPost}}>
            {children}
        </HPostContext.Provider>
    );
}