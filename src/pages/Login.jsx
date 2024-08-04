
import MobileLogin from "../components/Login/MobileLogin";
import PcLogin from "../components/Login/PcLogin";
import { Navigate, useNavigate } from "react-router-dom";
import useContextHooks from "../utils/useContextHooks";
import { useState } from "react";




const Login = () => {
    const navigate = useNavigate()
    const {currentUser,isLoading,login_with_email} = useContextHooks(); // context hooks

    const [error,setError] = useState('');  // input valided error 
    const [loading,setLoading] = useState(false) // login action loading state 
    const [user,setuser] = useState({email:"",password:""}); // user login data state
 
    const input_handler =(e) =>{  // input value get handler
        const field = e.target.name;
        const value = e.target.value;
        setuser(prev => ({...prev,[field]:value }));
       
       
    }
    const handel_login = async (e) => { // handle login 
        e.preventDefault()
        setError("");
       
        try {
            setLoading(true)
               const result =  await login_with_email(user.email,user.password); // login function 
               if(result.status){
                         navigate("/",{replace:true})
                       return setLoading(false)
               }else{
                setError(result.message) // error message
                setLoading(false) // loading state
               }
        } catch (error) {
            console.log(error);
        }
    }


    if(isLoading ) return <h2 className="text-2xl text-center">Loading.....</h2>;
    if(currentUser) return <Navigate to="/" replace={true} /> // login user redirect home page
    return (
        <>
        <div className="max-w-7xl mx-auto py-28 md:block hidden">
           <PcLogin  input_handler={input_handler} handel_login={handel_login} error={error} loading={loading} user={user}/>
           
        </div>

        <div className="md:hidden block">
            
        <MobileLogin input_handler={input_handler} handel_login={handel_login} error={error} loading={loading} user={user}/>
        </div>

        </>
    );
};

export default Login;