import NewsList from "../components/NewsList";

function NewsBlock() {
    return (
        <>
            <div className="news-main">
                <div className="news-titel">
                    Новости
                </div>
            </div>
            <>
            <NewsList />
            </>
        </>
    );
}

export default NewsBlock;
