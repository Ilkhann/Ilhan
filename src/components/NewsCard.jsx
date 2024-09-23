import { Link } from "react-router-dom";
import dota2Img from "../assets/images/game-icon/dota-2-icon.svg";

function NewsCard({ post }) {
    return (
        <>
            <div className="news-bg">
                <Link to={`/news-Dota/${post.id}`} className="news-card">
                    <div className="news-text">
                        <span className="icon">
                            <img src={dota2Img} alt="" className="title-img" />
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

export default NewsCard;
