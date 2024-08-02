

// eslint-disable-next-line react/prop-types
const Input = ({name,label ,placeholder, type},props) => {
    
  return (
    <div className="max-w-md flex flex-col  gap-2">
      <label htmlFor={name} className="">{label}</label>
      <input {...props} name={name} type={type || "text"} className="border rounded-md md:p-5 p-2 focus:placeholder:text-sm border-[#d9d8d8] focus:border-[#a8a6a6] outline-[#d9d8d8] text-[#4b4a4a]"  placeholder={placeholder}/>
    </div>

  );
};

export default Input;
