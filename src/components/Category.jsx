import { useState } from "react";

const Category = ({ setSelectedCategory }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setActiveCategory(category);
    };

    const categories = [
        { name: "Politics", key: "politics" },
        { name: "Business", key: "business" },
        { name: "Entertainment", key: "entertainment" },
        { name: "Sports", key: "sports" },
    ];

    return (
        <div className="mx-5 mt-10 lg:mx-0">
            <h2 className="mx:5 lg:px-[200px] font-bold text-2xl text-white">
                Categories
            </h2>
            <div className="mx:5 lg:px-[200px] flex gap-2 md:gap-3 lg:gap-5 mt-3 text-sm lg:text-l">
                {categories.map((category) => (
                    <div
                        key={category.key}
                        onClick={() => handleCategoryClick(category.key)}
                        className={`
              rounded-xl px-3 py-1 cursor-pointer
              ${
                  activeCategory === category.key
                      ? "bg-[#4b02e8] text-white"
                      : " text-white border border-[#4b02e8]"
              }
            `}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
