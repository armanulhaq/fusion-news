import NewsCard from "./NewsCard";

const Feed = ({ articles }) => {
    return (
        <div className=" px-5 lg:px-[200px] w-full gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
            {articles.map((item, idx) => {
                const imageUrl = !item.urlToImage
                    ? "/breakingnews.png"
                    : item.urlToImage;

                return (
                    <NewsCard
                        key={idx}
                        title={item.title}
                        img={imageUrl}
                        url={item.url}
                        publishedAt={item.publishedAt}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/breakingnews.png";
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Feed;
