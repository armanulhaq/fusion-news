const Category = ({ setSelectedCategory }) => {
    return (
        <div>
            <h2 className="font-bold text-xl mx-5 lg:mx-10">Categories</h2>
            <div className="flex gap-2 md:gap-3 lg:gap-5 mx-5 lg:mx-10 mt-3 text-sm lg:text-l">
                <div
                    onClick={() => setSelectedCategory("politics")}
                    className="bg-gray-200 rounded-xl px-3 py-1 cursor-pointer"
                >
                    Politics
                </div>
                <div
                    onClick={() => setSelectedCategory("business")}
                    className="bg-gray-200 rounded-xl px-3 py-1 cursor-pointer"
                >
                    Business
                </div>
                <div
                    onClick={() => setSelectedCategory("entertainment")}
                    className="bg-gray-200 rounded-xl px-3 py-1 cursor-pointer"
                >
                    Entertainment
                </div>
                <div
                    onClick={() => setSelectedCategory("sports")}
                    className="bg-gray-200 rounded-xl px-3 py-1 cursor-pointer"
                >
                    Sports
                </div>
            </div>
        </div>
    );
};

export default Category;
