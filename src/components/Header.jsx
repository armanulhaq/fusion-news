const Header = () => {
    return (
        <div className=" px-5 lg:px-[50px] w-full shadow-sm p-4 bg-[#131313] text-white border-b border-gray-800">
            <div className="flex justify-between">
                <div className="flex gap-2 justify-center">
                    <img
                        className="h-5 w-5  lg:h-7 lg:w-7 flex "
                        src="/favicon.png"
                        alt=""
                    />
                    <div className="font-extrabold text-[15px] lg:text-[20px] ">
                        Fusion <span className="text-[#4b02e8]">News</span>
                    </div>
                </div>

                <div className="flex gap-3 lg:gap-5 ">
                    <a
                        href="https://github.com/armanulhaq"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-4 h-4 lg:w-5 lg:h-5"
                            src="/github.png"
                            alt="GitHub"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/armanulhaq/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            className="w-4 h-4 lg:w-5 lg:h-5"
                            src="/linkedin.png"
                            alt="Linkedin"
                        />
                    </a>
                    <a
                        href="https://iamarman.vercel.app/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            className="w-4 h-4 lg:w-5 lg:h-5"
                            src="/portfolio.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
