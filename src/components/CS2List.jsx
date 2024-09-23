import PostCard from "./CS2Card";
import { useState, useEffect } from "react";
import axios from "axios"   


function CS2List() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try{
                const response = await axios.get('https://a3bf84714d3bedd1.mokky.dev/Game_cs');
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

export default CS2List;
