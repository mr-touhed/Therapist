import { useState } from "react";
import Input from "../Input";
import PasswordInput from "../PasswordInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const MobileRegister = ({handel_register,loading,error,user,input_handler}) => {
    const [login,setLoagin] = useState(false)
    return (
        <div className="w-full min-h-screen relative bg-cover text-center px-8 pt-6 " style={{backgroundImage:"url(/images/mobile_auth_bg.png)"}}>
                <div>
                    <h2 className="text-2xl font-normal text-primary ">Logo</h2>
                    {
                        login ? <div className="mt-4 text-white font-semibold" onClick={()=>setLoagin(false)}>

                            <h2>Create Account</h2>
                            <h2>Fill in Your Information</h2>
                        </div> :

                        <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-heading">Sign In To Your Account</h3>
                        <p className="text-white text-pretty text-sm text-left font-extralight">elcome Back! By click the sign up button, you&lsquo;re agree to
                            Zenitood Terms and Service and acknlowledge the <span className="text-[#4285F3] underline">Privacy and Policy</span></p>

                            <div className="  mx-auto bg-[#0000000d] backdrop-blur-md grid place-items-center">
                                        <div className="p-4 bg-[#3d593eb9] rounded-lg backdrop-blur-md text-center space-y-2">
                                                <h3 className="text-xl font-semibold text-primary" onClick={()=> setLoagin(true)}>Create Account</h3>
                                                <p className="text-xl  text-white">Fill in Your information</p>
                                        </div>
                            </div>
                    </div>
                    }
                </div>

                <div className={`bg-white w-full h-screen fixed left-0 p-4  text-left rounded-3xl ${login ? "top-[20%]":"top-[100%]"} transition-all ease-out `}>


                                <h2 className="text-nowrap text-center text-lg">Sign In</h2>
                                <form onSubmit={handel_register} className="flex flex-col">
                                <Input onChange={(e)=> input_handler(e)} value={user.username} label="Name" placeholder="@username" type="text" name="username" required/>
                                <Input onChange={(e)=> input_handler(e)} value={user.email} label="Email" placeholder="Enter your email" type="email" name="email" required/>
                                                             
                                <PasswordInput onChange={(e)=> input_handler(e)} value={user.password} label="Password" placeholder="Enter your password" name="password"  required/>
                                <PasswordInput onChange={(e)=> input_handler(e)} value={user.confirmPass} label="Confirm password" placeholder="Re-type password" name="confirmPass" required/>
                                <div className="mt-4">
                                <CheckBox required text="Accept Terms of Service" className="text-xs text-primary "/>
                                </div>
                                <Button disabled={loading}>Sign up</Button>
                                    <p className="text-xs font-light text-balance text-[#fc5f5f]">{error}</p>
                                <p className="text-sm">Already Have an Account? <Link to="/login" className="text-primary underline">Log in</Link></p>
                                </form>
                    </div>
        </div>
    );
};


export default MobileRegister;

