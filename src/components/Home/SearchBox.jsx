import { Link } from "react-router-dom";
import img from "../../../public/images/therapi.png"
import img2 from "../../../public/images/therapi-bg.png"
const SearchBox = () => {
    return (
        <div className="bg-white rounded-md  p-8 grid grid-cols-2">
                    <div className="space-y-2">
                        <h2 className="text-heading text-lg font-semibold">I&lsquo;m Looking for Massage Therapist Near...</h2>
                        <p className="">In using this site, I agree to be bound by the <Link className="text-primary underline">Terms of Service</Link>  <br/>and  <Link className="text-primary underline">Privacy Policy</Link></p>
                        <div className="bg-[#EEF2F5] max-w-[470px] p-2 flex rounded-md">
                        <input type="text" className="px-2 w-full bg-[#EEF2F5]"/>
                            <button className="bg-primary px-6 py-4 rounded-md text-white">Go</button>
                        </div>
                    </div>
                    <div className="bg-no-repeat " style={{backgroundImage:`url(${img2})`, }}>
                        <img src={img} alt="" className="ml-auto"/>
                    </div>
        </div>
    );
};

export default SearchBox;