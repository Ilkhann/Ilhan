import NewsInnerList from "../components/NewsInnerList";
import HeaderCS2 from "../components/HeaderCS2";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NewsPages() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://a3bf84714d3bedd1.mokky.dev/CS_news/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    }, [id]);

    return(
        <>
            <HeaderCS2 />
            <main>
                {post ? <NewsInnerList post={post} /> : <p>Загрузка...</p>}
            </main>
        </>
    );
}

export default NewsPages;
