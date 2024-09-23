import PostCard from "./NewsCardCS";
import { useState, useEffect } from "react";
import axios from "axios"   

function NewsListCS() {
    const [posts, setPost] = useState([])

    useEffect(() => {   
        async function fetchPost() {
            try{
                const response = await axios.get('https://a3bf84714d3bedd1.mokky.dev/CS_news');
                setPost(response.data);
            } catch(error){
                console.log(error);
            } 
        }
        fetchPost();
    }, []);

    return(
        <>
            {posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
        </>
    );
}

export default NewsListCS;
