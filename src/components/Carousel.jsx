import { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import "./carousel.css";

export const Carousel = ({ headlines }) => {
    const [slide, setSlide] = useState(0);
    const [imageErrors, setImageErrors] = useState({});

    const nextSlide = () => {
        setSlide(slide === headlines.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? headlines.length - 1 : slide - 1);
    };

    const handleImageError = (index) => {
        setImageErrors((prev) => ({
            ...prev, //spreading all the previous indexes that were errorec
            [index]: true, //go to the indexth entry and change its value to true
        }));
    };

    return (
        <div className="flex flex-col lg:flex-row md:gap-15 lg:gap-20">
            <div className="mx-15 px-5 mt-5">
                <h1 className="text-2xl lg:px-[170px] font-bold   text-white">
                    Headlines
                </h1>

                <div className="carousel">
                    <FaChevronCircleLeft
                        onClick={prevSlide}
                        className="arrow arrow-left"
                    />
                    {headlines.map((item, idx) => {
                        const imageUrl =
                            !item.urlToImage || imageErrors[idx]
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
                                    onError={() => handleImageError(idx)}
                                    className="news-image"
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

            <div className=" flex flex-col mx:5 px-5">
                <div className="px-0 text-2xl lg:px-[170px] font-bold  mt-5 text-[#4b02e8]">
                    Top Stories
                </div>
                <div className="flex gap-5 flex-col  mt-2">
                    {headlines.slice(0, 5).map((item, idx) => {
                        const imageUrl =
                            !item.urlToImage || imageErrors[idx]
                                ? "/breakingnews.png"
                                : item.urlToImage;

                        return (
                            <div
                                key={idx}
                                className="flex gap-5 border-b border-gray-800 pb-2"
                            >
                                <img
                                    src={imageUrl}
                                    onError={() => handleImageError(idx)}
                                    className="h-[70px] w-[100px] rounded-md "
                                />
                                {item.title && (
                                    <div className="text-white text-sm text-wrap flex items-center justify-center w-[390px] font-bold">
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
