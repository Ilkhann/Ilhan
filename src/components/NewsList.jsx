import PostCard from "./NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";

function NewsList() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        async function fetchPost() {
            try{
                const response = await axios.get('https://a3bf84714d3bedd1.mokky.dev/Dota_news');
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
                <PostCard key={post.id} post={post} />
            ))}
        </>
    );
}

export default NewsList;
