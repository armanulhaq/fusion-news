const NewsCard = ({ title, img, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            className="flex flex-col mt-5 shadow-md rounded-xl cursor-pointer"
        >
            <img
                className="rounded-xl h-[200px] w-[400px]"
                src={img}
                alt={title}
            />
            <h2 className="p-4 flex ">{title}</h2>
        </a>
    );
};

export default NewsCard;
