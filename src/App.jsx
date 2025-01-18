import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Newsroom from "./components/Newsroom";
import Feed from "./components/Feed";

function App() {
    const [headlines, setHeadlines] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("general");
    const [articles, setArticles] = useState([]);

    return (
        <>
            <Header />
            <Newsroom
                selectedCategory={selectedCategory}
                articles={articles}
                setArticles={setArticles}
                headlines={headlines}
                setHeadlines={setHeadlines}
            />
            <Category setSelectedCategory={setSelectedCategory} />
            <Feed articles={articles} />
        </>
    );
}

export default App;
