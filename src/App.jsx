import "./App.css";
// import Carousel from "./components/Carousel";
// import Footer from "./components/Footer";
import { useState } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Newsroom from "./components/Newsroom";
import Feed from "./components/Feed";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("general");
    const [articles, setArticles] = useState([]);

    return (
        <>
            <Header />
            <Newsroom
                selectedCategory={selectedCategory}
                articles={articles}
                setArticles={setArticles}
            />
            <Category setSelectedCategory={setSelectedCategory} />
            <Feed articles={articles} />
            {/* <Footer /> */}
        </>
    );
}

export default App;
