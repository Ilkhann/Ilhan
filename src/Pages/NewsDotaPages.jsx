import HeaderDota from "../components/HeaderDota";
import NewsInnerListDota from "../components/NewsInnerListDota";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NewsDotaPages() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://a3bf84714d3bedd1.mokky.dev/Dota_news/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    }, [id]);

    return(
        <>
            <HeaderDota/>
            <main>
                {post ? <NewsInnerListDota post={post} /> : <p>Загрузка...</p>}
            </main>
        </>
    );  
}

export default NewsDotaPages;