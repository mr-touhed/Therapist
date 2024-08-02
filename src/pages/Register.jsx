import MobileRegister from "../components/Register/MobileRegister";
import PcRegister from "../components/Register/PcRegister";



const Register = () => {
    return (
        <>
        <div className="max-w-7xl mx-auto py-28 md:block hidden">
           <PcRegister/>
           
        </div>

        <div className="md:hidden block">
        <MobileRegister/>
        </div>

        </>
    );
};

export default Register;