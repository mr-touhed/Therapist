import MobileLogin from "../components/Login/MobileLogin";
import PcLogin from "../components/Login/PcLogin";



const Login = () => {
    return (
        <>
        <div className="max-w-7xl mx-auto py-28 md:block hidden">
           <PcLogin/>
           
        </div>

        <div className="md:hidden block">
            
        <MobileLogin/>
        </div>

        </>
    );
};

export default Login;