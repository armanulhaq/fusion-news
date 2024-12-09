const NewsCard = ({ title, img, url, publishedAt }) => {
    const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <a
            href={url}
            target="_blank"
            className="hover:scale-105 flex flex-col mt-5 shadow-md rounded-xl cursor-pointer text-white border border-gray-800"
        >
            <img
                className="rounded-xl h-[230px] w-[360px] lg:h-[170px] lg:w-[360px] "
                src={img}
                alt={title}
            />
            <div className="flex flex-1 flex-col justify-between">
                <h2 className="px-4 py-2 flex text-sm">{title}</h2>
                <h3 className="px-4 pb-3 justify-end flex text-sm text-gray-400">
                    {formattedDate}
                </h3>
            </div>
        </a>
    );
};

export default NewsCard;
