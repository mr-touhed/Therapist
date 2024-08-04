import { useState } from "react";
import MobileRegister from "../components/Register/MobileRegister";
import PcRegister from "../components/Register/PcRegister";
import useContextHooks from "../utils/useContextHooks";
import { useNavigate } from "react-router-dom";



const Register = () => {
        const navigate = useNavigate()
        const {currentUser,isLoading,create_user} = useContextHooks();
        const [error,setError] = useState('');
        const [loading,setLoading] = useState(false)
        const [user,setuser] = useState({username:"",email:"",password:"", confirmPass:""});
     
        const input_handler =(e) =>{
            const field = e.target.name;
            const value = e.target.value;
            setuser(prev => ({...prev,[field]:value }))
           
        }
        const handel_register = async (e) => {
            e.preventDefault()
            setError("");
    
            if(user.password !== user.confirmPass ) return setError("password not same");
    
            try {
                setLoading(true)
                   const result =  await create_user(user.username,user.email,user.password);
                   if(result.status){
                             navigate("/",{replace:true})
                           return setLoading(false)
                   }else{
                    setError(result.message)
                    setLoading(false)
                   }
            } catch (error) {
                console.log(error);
            }
        }


        if(isLoading) return "Loading..."
        if(user) ""
    return (
        <>
        <div className="max-w-7xl mx-auto py-28 md:block hidden">
           <PcRegister handel_register={handel_register} input_handler={input_handler} loading={loading}   error={error} user={user}/>
           
        </div>

        <div className="md:hidden block">
        <MobileRegister handel_register={handel_register} input_handler={input_handler} loading={loading}   error={error} user={user} />
        </div>

        </>
    );
};

export default Register;