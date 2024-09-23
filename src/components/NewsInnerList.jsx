import NewsInnerCard from "./NewsInnerCard";

function NewsInnerList({ post }) {
    return (
        <NewsInnerCard
            key={post.id}
            InnerTitle={post.textNews}
            InnerTxt={post.InnerTxt}
            date={post.date}
            imageUrl={post.imageUrl}
        />
    );
}

export default NewsInnerList;
