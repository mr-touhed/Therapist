import img from "../../public/images/user/1.png"
const TherapistCard = () => {
    return (
        <div className="border p-3 border-[#d8d8d8] rounded-md w-[214px] h-[303px] relative overflow-hidden flex flex-col items-center">
        <div className=" w-[194px] h-[146px] overflow-hidden rounded-md">
                <img src={img} alt="" />
        </div>
        <div className="text-xs self-start mt-6">
            <p className="text-heading text-lg">Alexander Cort</p>
            <p>
                <span className="text-[#5C635A]">123 Elm Street, New York</span>
            </p>
            <p>
                <span className="text-[#5C635A]">Mobile & In-Studio</span>
            </p>
        </div>
            <button className="absolute bottom-0 underline hover:bg-primary bg-[#D4E9FF] transition-all ease-in   w-full p-4 hover:text-white text-sm">See Details</button>
        </div>
    );
};

export default TherapistCard;