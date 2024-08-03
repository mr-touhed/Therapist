
import { useContext } from "react";
import MobileLogin from "../components/Login/MobileLogin";
import PcLogin from "../components/Login/PcLogin";
import { Authcontext } from "../provider/Providers";
import { Navigate } from "react-router-dom";




const Login = () => {
    
    const {user,loading} = useContext(Authcontext);

    if(loading ) return <h2 className="text-2xl text-center">Loading.....</h2>;
    if(user) return <Navigate to="/" replace={true} />
    return (
        <>
        <div className="max-w-7xl mx-auto py-28 md:block hidden">
           <PcLogin  />
           
        </div>

        <div className="md:hidden block">
            
        <MobileLogin/>
        </div>

        </>
    );
};

export default Login;