import { useEffect } from "react";
import Carousel from "./Carousel";

const Newsroom = ({
    selectedCategory,
    setArticles,
    headlines,
    setHeadlines,
}) => {
    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const response = await fetch(
                    "https://newsapi.org/v2/top-headlines?country=us&apiKey=00a7a6936d9542b5b0ad4927e6ca27ac"
                );
                const data = await response.json();
                setHeadlines(data.articles);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            }
        };
        fetchHeadlines();
        console.log(headlines);
    }, []);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=00a7a6936d9542b5b0ad4927e6ca27ac`
                );
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            }
        };

        // Only fetch if a category is selected
        if (selectedCategory) {
            fetchNews();
        }
    }, [selectedCategory, setArticles]);

    return <Carousel headlines={headlines} />;
};

export default Newsroom;
