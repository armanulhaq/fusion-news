import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const Newsroom = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
                        import.meta.env.VITE_API_KEY
                    }`
                );
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            }
        };

        fetchNews();
    }, []);

    // Log articles when they are updated
    useEffect(() => {
        console.log(articles);
    }, [articles]);

    return <Carousel articles={articles} />;
};

export default Newsroom;
