import { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";


const MenuItems = () => {
    const [showmenu,setShowMenu] = useState(true)
    return (
        <div className=" px-4 md:p-0 max-w-[100vw] overflow-hidden  border-r border-[#d1d4d7] shadow-md md:min-h-[100vh]  flex md:flex-col justify-between items-center">
                    <div className="md:h-32 grid place-items-center">
                        <h1 className="text-2xl text-primary">Logo</h1>
                    </div>
                    <div className="md:hidden block">
                    <img src="/images/icons/Notification.png" alt="" className="" />
                        <button onClick={()=>setShowMenu(true)}>
                                <img src="/images/icons/Menu_Alt_01.png" alt="" className="mt-4" />
                        </button>
                    </div>
                    <nav className="w-full h-screen md:block hidden">
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
                       
                    </nav>

                    
                    
                    <MobileMenu setShowMenu={setShowMenu} showmenu={showmenu}/>
                    



            </div>
    );
};

export default MenuItems;