import NewsInnerCardDota from "./NewsInnerCardDota";

function NewsInnerListDota({post}) {
    return (
        <NewsInnerCardDota
            key={post.id}
            InnerTitle={post.textNews}
            InnerTxt={post.InnerTxt}
            date={post.date}
            imageUrl={post.imageUrl}
        />
    );
}

export default NewsInnerListDota;
