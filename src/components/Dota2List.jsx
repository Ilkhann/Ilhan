import PostCard from "./Dota2Card";
import { useState, useEffect } from "react";
import axios from "axios"


function Dota2List() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try{
                const response = await axios.get('https://a3bf84714d3bedd1.mokky.dev/Game_dota');
                setPosts(response.data);
            } catch(error){
                console.log(error);
            } 
        }
        fetchPosts();
    }, []);

    return(
        <>
            {posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
        </>
    );
}

export default Dota2List;