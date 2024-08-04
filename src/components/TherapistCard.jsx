import { FaLocationDot } from "react-icons/fa6";

import { FaCarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const TherapistCard = ({user}) => {
    const {name,location,title,img} = user
    return (
        <div className="border p-3 border-[#d8d8d8] rounded-md w-[214px] h-[303px] relative overflow-hidden flex flex-col items-center">
        <div className=" w-[194px] h-[146px] overflow-hidden rounded-md">
                <img src={img} alt="" className="object-cover object-center"/>
        </div>
        <div className="text-xs self-start mt-6">
            <p className="text-heading text-lg">{name}</p>
            <p className="flex text-[#5C635A] items-center gap-1">
                    <FaLocationDot />
                <span >{location}</span>
            </p>
            <p className="flex text-[#5C635A] items-center gap-1">
            <FaCarAlt />
                <span >{title}</span>
            </p>
        </div>
            <Link className="absolute flex justify-center items-center bottom-0 underline hover:bg-primary bg-[#D4E9FF] transition-all ease-in   w-full p-4 hover:text-white text-sm">See Details</Link>
        </div>
    );
};

export default TherapistCard;