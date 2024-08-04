import { useState } from "react";
import MobileRegister from "../components/Register/MobileRegister";
import PcRegister from "../components/Register/PcRegister";

import { Navigate, useNavigate } from "react-router-dom";
import useContextHooks from "../hooks/useContextHooks";
import Loading from "../components/Loading";



const Register = () => {
        const navigate = useNavigate()
        const {currentUser,isLoading,create_user} = useContextHooks(); // auth context hooks
        const [error,setError] = useState(''); // error state
        const [loading,setLoading] = useState(false) // loading state login function
        const [user,setuser] = useState({username:"",email:"",password:"", confirmPass:""}); // user state
     // get input handler
        const input_handler =(e) =>{ 
            const field = e.target.name;
            const value = e.target.value;
            setuser(prev => ({...prev,[field]:value }))
           
        }
            // user register handler
        const handel_register = async (e) => {
            e.preventDefault()
            setError("");
    
            if(user.password !== user.confirmPass ) return setError("password not same"); // control password match 
    
            try {
                setLoading(true)
                   const result =  await create_user(user.username,user.email,user.password); // cerate user function 
                   if(result.status){
                             navigate("/",{replace:true}) // redirect home page
                           return setLoading(false)
                   }else{
                    setError(result.message)
                    setLoading(false)
                   }
            } catch (error) {
                console.log(error);
            }
        }


        if(isLoading) return <Loading/>
        if(currentUser) return <Navigate to="/"/>
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