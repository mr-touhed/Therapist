import { useEffect } from "react";
import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const MobileMenu = ({setShowMenu,showmenu}) => {

    
    useEffect(()=>{
        // handeler for close show menu
        window.addEventListener("click", (e)=>{
            const CloseBox = e.target.classList.contains("fixed")
            
            if(CloseBox){
                setShowMenu(false)
            }
        })
    })
    return (
        <nav data="close" className={`md:hidden  fixed ${showmenu ? "right-0":"-right-[100vw]"} top-0 z-10 w-full bg-[#000000a6] backdrop-blur-sm h-screen transition-all ease-out`}>
                        
                        <div className=" md:w-full w-[60%]  min-h-screen md:m-0 ml-auto bg-white md:space-y-0 space-y-6">
                        <div className="h-[202px] bg-primary md:hidden  ">

                            </div>
                        <ul className="">
                            <li>
                            
                                <NavLink to="/" className={`bg-[#D4E9FF] flex items-center gap-3  border-l-4 p-3 border-[#102C4A] font-medium text-heading`}>
                                <img src="/images/icons/Category.png" className="w-4 h-4" />
                                Home
                                </NavLink>
                            </li>
                            <li >
                            
                                <NavLink className={`flex items-center gap-3   p-3`}>
                                <img src="/images/icons/User.png" className="w-4 h-4" />
                                    New Listing
                                    </NavLink>
                            </li>
                            <li className=" flex items-center gap-3   p-3   ">
                            <img src="/images/icons/Search.png" className="w-4 h-4" />
                                <NavLink>Search</NavLink>
                            </li>
                            <li className=" flex items-center gap-3   p-3   ">
                            <img src="/images/icons/Paper.png" className="w-4 h-4" />
                                <NavLink>About</NavLink>
                            </li>
                            <li className=" flex items-center gap-3   p-3   ">
                            <img src="/images/icons/fi_heart.png" className="w-4 h-4" />
                                <NavLink>Favorites</NavLink>
                            </li>
                                 <li className="border-b border-[#dedddd] m-5 ">
                                    
                                </li>                       
                        </ul>

                        <ul >
                        <li className=" flex items-center gap-3   p-3   ">
                            <img src="/images/icons/Info_Circle.png" className="w-4 h-4" />
                                <NavLink>Help Center</NavLink>
                            </li>
                        <li className=" flex items-center gap-3   p-3   ">
                            <img src="/images/icons/Setting.png" className="w-4 h-4" />
                                <NavLink>Settings</NavLink>
                            </li>
                        </ul>
                        </div>
                    </nav>
    );
};

export default MobileMenu;