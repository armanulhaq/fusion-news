import "./App.css";
// import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Newsroom from "./components/Newsroom";

function App() {
    return (
        <>
            <Header />
            {/* <Carousel /> */}

            <Newsroom />
            <Main />
            <Footer />
        </>
    );
}

export default App;
