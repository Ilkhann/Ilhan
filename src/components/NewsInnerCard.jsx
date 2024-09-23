import { Link } from "react-router-dom";

function NewsInnerCard({ InnerTitle, InnerTxt, date, imageUrl }) {
    return (
        <div className="news-card">
            <Link to="/cs2" className="back-button">Назад</Link>
            <h2>{InnerTitle}</h2>
            <p className="news-date">{date}</p>
            <p className="content">{InnerTxt}</p>
            <img className="image-container" src={imageUrl} alt="news image" />
        </div>
    );
}

export default NewsInnerCard;