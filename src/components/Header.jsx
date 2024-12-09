const Header = () => {
    return (
        <div className=" px-5 lg:px-[50px] w-full shadow-sm p-4 bg-[#131313] text-white border-b border-gray-800">
            <div className="flex justify-between">
                <h2 className="font-extrabold text-[20px] lg:text-[25px] text-center ">
                    Fusion <span className="text-[#4b02e8]">News</span>
                </h2>
                <div className="flex gap-5 ">
                    <a
                        href="https://github.com/armanulhaq"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-5 h-5"
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
                            className="w-5 h-5"
                            src="/linkedin.png"
                            alt="Linkedin"
                        />
                    </a>
                    <a
                        href="https://iamarman.vercel.app/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img className="w-5 h-5" src="/portfolio.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
