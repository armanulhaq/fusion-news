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
                            slide === idx ? "slide" : "slide slide-hidden"
                        }
                    >
                        <img
                            src={imageUrl}
                            alt={item.title || `News slide ${idx + 1}`}
                            onError={() => handleImageError(idx)}
                            className="news-image"
                        />
                        {item.title && (
                            <div className="slide-title">{item.title}</div>
                        )}
                    </div>
                );
            })}
            <FaChevronCircleRight
                onClick={nextSlide}
                className="arrow arrow-right"
            />
            <span className="indicators">
                {headlines.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx
                                    ? "indicator"
                                    : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default Carousel;
