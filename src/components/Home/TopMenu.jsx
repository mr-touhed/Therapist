

import { IoIosArrowDown } from "react-icons/io";
const TopMenu = ({user,logOut}) => {
    
    return (
        <div className="p-6 bg-white md:flex justify-between items-center hidden ">
        <div className="flex items-center gap-6">
            <img src={user?.photoURL} alt="user image" className="w-8 h-8 rounded-full object-cover object-center" />
            <div>
                <div className="flex gap-6 items-center">
                <h3>{user?.displayName}</h3>
                    <span className="cursor-pointer">
                        <IoIosArrowDown/>
                    </span>
                </div>
                <p className="text-sm">{user?.email}</p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <img src={'/images/icons/Notification.png'} alt="" className="border-r px-6"/>
            <button onClick={logOut} className="flex items-center gap-2 text-[#f76767]">Log Out <img src={'/images/icons/logout.png'} alt="" /></button>
        </div>
</div>
    );
};

export default TopMenu;