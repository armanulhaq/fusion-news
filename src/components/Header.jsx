const Header = () => {
    return (
        <div className="w-full shadow-sm p-5">
            <div className="flex justify-between">
                <h2 className="font-extrabold text-[20px] lg:text-[25px] text-center ">
                    Fusion News
                </h2>
                <div className="flex gap-5 ">
                    <a
                        href="https://github.com/armanulhaq"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-7 h-7"
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
                            className="w-7 h-7"
                            src="/linkedin.png"
                            alt="Linkedin"
                        />
                    </a>
                    <a
                        href="https://iamarman.vercel.app/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img className="w-7 h-7" src="/portfolio.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;

// <div className="bottom-item">

//                     <a
//                         href="https://github.com/armanulhaq"
//                         target="_blank"
//                         rel="noopener"
//                     >
//                         {isCollapsed ? <p>Github</p> : null}
//                     </a>
//                 </div>

//                 <div className="bottom-item">
//                     <a
//                         href="https://www.linkedin.com/in/armanulhaq/"
//                         target="_blank"
//                         rel="noopener"
//                     >
//                         <img src={assets.linkedin} alt="" />
//                     </a>
//                     <a
//                         href="https://www.linkedin.com/in/armanulhaq/"
//                         target="_blank"
//                         rel="noopener"
//                     >
//                         {isCollapsed ? <p>Linkedin</p> : null}
//                     </a>
//                 </div>

//                 <div className="bottom-item">
//                     <a
//                         href="https://iamarman.vercel.app/"
//                         target="_blank"
//                         rel="noopener"
//                     >
//                         <img src={assets.portfolio} alt="" />
//                     </a>
//                     <a
//                         href="https://iamarman.vercel.app/"
//                         target="_blank"
//                         rel="noopener"
//                     >
//                         {isCollapsed ? <p>Portfolio</p> : null}
//                     </a>
//                 </div>
