import { Link } from "react-router-dom";
import cs2Icon from "../assets/images/game-icon/counter-strike.svg";

function NewsCardCS({ post }) {
    return (
        <>
            <div className="news-bg">
                <Link to={`/news-CS/${post.id}`} className="news-card">
                    <div className="news-text">
                        <span className="icon">
                            <img src={cs2Icon} alt="" className="title-img" />
                        </span>
                        <span className="text-news">{post.textNews}</span>
                    </div>
                    <div className="news-img">
                        <img src={post.imageUrl} alt="" className="img" />
                        <div className="date">{post.date}</div>
                    </div>
                </Link>
                <div className="spase"></div>
            </div>
        </>
    );
}

export default NewsCardCS;
