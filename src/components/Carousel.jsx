import { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import "./carousel.css";

export const Carousel = ({ headlines }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === headlines.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? headlines.length - 1 : slide - 1);
    };

    return (
        <div className="w-full px-5 lg:px-[10vw] flex flex-col lg:flex-row gap-15  lg:justify-between">
            <div className="carousel-container">
                <h1 className="text-2xl  font-bold mt-5 text-white">
                    Headlines
                </h1>

                <div className="carousel">
                    <FaChevronCircleLeft
                        onClick={prevSlide}
                        className="arrow arrow-left"
                    />
                    {headlines.map((item, idx) => {
                        const imageUrl = !item.urlToImage
                            ? "/breakingnews.png"
                            : item.urlToImage;

                        return (
                            <div
                                key={idx}
                                className={
                                    slide === idx
                                        ? "slide"
                                        : "slide slide-hidden"
                                }
                            >
                                <img
                                    src={imageUrl}
                                    alt={item.title || `News slide ${idx + 1}`}
                                    className="news-image"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/breakingnews.png";
                                    }}
                                />
                                {item.title && (
                                    <div className="slide-title">
                                        {item.title}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    <FaChevronCircleRight
                        onClick={nextSlide}
                        className="arrow arrow-right"
                    />
                </div>
            </div>

            <div className=" flex flex-col lg:mx:5 lg:pl-10">
                <div className="px-0 text-2xl font-bold mt-5  text-white">
                    Top Stories
                </div>
                <div className="flex gap-5 flex-col  mt-2">
                    {headlines.slice(0, 5).map((item, idx) => {
                        const imageUrl = !item.urlToImage
                            ? "/breakingnews.png"
                            : item.urlToImage;

                        return (
                            <div
                                key={idx}
                                className="flex gap-5 border-b border-gray-800 pb-2"
                            >
                                <img
                                    src={imageUrl}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/breakingnews.png";
                                    }}
                                    className="h-[70px] w-[100px] rounded-md "
                                />
                                {item.title && (
                                    <div className="text-white text-sm text-wrap flex items-center justify-center w-[400px] font-bold">
                                        {item.title}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
