import { useState } from "react";
import NewsCard from "./NewsCard";

const Feed = ({ articles }) => {
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (index) => {
        setImageErrors((prev) => ({
            ...prev, //spreading all the previous indexes that were errorec
            [index]: true, //go to the indexth entry and change its value to true
        }));
    };
    return (
        <div className=" px-5 lg:px-[200px] w-full gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
            {articles.map((item, idx) => {
                const imageUrl =
                    !item.urlToImage || imageErrors[idx]
                        ? "/breakingnews.png"
                        : item.urlToImage;

                return (
                    <NewsCard
                        key={idx}
                        title={item.title}
                        img={imageUrl}
                        url={item.url}
                        publishedAt={item.publishedAt}
                        onError={() => handleImageError(idx)}
                    />
                );
            })}
        </div>
    );
};

export default Feed;
