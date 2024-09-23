import NewsListCS from "../components/NewsListCS";

function NewsBlockCS() {
    return (
        <>
            <div className="news-main">
                <div className="news-titel">
                    Новости
                </div>
            </div>
            <>
            <NewsListCS />
            </>
        </>
    );
}

export default NewsBlockCS;
