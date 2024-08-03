
import notification from "../../../public/images/icons/Notification.png"
import logout from "../../../public/images/icons/logout.png"

const TopMenu = () => {
    return (
        <div className="p-6 bg-white md:flex justify-between items-center hidden ">
        <div className="flex items-center gap-6">
            <img src="" alt="" className="w-8 h-6 rounded-full" />
            <div>
                <div className="flex gap-6">
                <h3>sagar soni</h3>
                    <span>H</span>
                </div>
                <p className="text-sm">sagar@gmail.com</p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <img src={notification} alt="" className="border-r px-6"/>
            <button className="flex items-center gap-2 text-[#f76767]">Log Out <img src={logout} alt="" /></button>
        </div>
</div>
    );
};

export default TopMenu;