import { Link } from "react-router-dom";
const SearchBox = () => {
    return (
        <div className="bg-white rounded-md  p-8 grid md:grid-cols-2 grid-cols-1 ">
                    <div className="space-y-2">
                        <h2 className="text-heading text-lg font-semibold">I&lsquo;m Looking for Massage Therapist Near...</h2>
                        <p className="">In using this site, I agree to be bound by the <Link className="text-primary underline">Terms of Service</Link>  <br/>and  <Link className="text-primary underline">Privacy Policy</Link></p>
                        <div className="bg-no-repeat block md:hidden" style={{backgroundImage:`url(/images/therapi-bg.png)`, }}>
                        <img src={`/images/therapi.png`} alt="" className="ml-auto"/>
                    </div>
                        
                        <div className="bg-[#EEF2F5] max-w-[470px] p-1 flex rounded-md">
                        <input type="text" className="px-2 w-full bg-[#EEF2F5]"/>
                            <button className="bg-primary px-6 py-2 rounded-md text-white">Go</button>
                        </div>
                    </div>
                    <div className="bg-no-repeat md:block hidden" style={{backgroundImage:`url(/images/therapi-bg.png)`, }}>
                        <img src={`/images/therapi.png`} alt="" className="ml-auto"/>
                    </div>
        </div>
    );
};

export default SearchBox;