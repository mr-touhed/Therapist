import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { GoEye } from "react-icons/go";
// eslint-disable-next-line react/prop-types
const PasswordInput = ({name,label ,placeholder},props) => {

    const [showpassword,setShowPassword] = useState(false)
  return (
    <div className="max-w-md flex flex-col  gap-2 relative">
      <label htmlFor={name} className="">{label}</label>
      <input {...props} name={name} type={`${showpassword ? "text" : "password"}` } className="border rounded-md md:p-5 p-2 focus:placeholder:text-sm border-[#d9d8d8] focus:border-[#a8a6a6] outline-[#d9d8d8] text-[#4b4a4a]"  placeholder={placeholder}/>
      <span className="absolute right-5 top-[60%] cursor-pointer" onClick={() => setShowPassword(!showpassword) }>
      {showpassword ? <GoEye /> : <FaRegEyeSlash />}
      </span>
    </div>

  );
};

export default PasswordInput;
