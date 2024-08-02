import { useState } from "react";
import Input from "../Input";
import PasswordInput from "../PasswordInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import GoogleBtn from "../GoogleBtn";
import FacebookBtn from "../FacebookBtn";
import { Link } from "react-router-dom";


const MobileLogin = () => {
    const [login,setLoagin] = useState(false)
    return (
        <div className="w-full min-h-screen relative bg-cover text-center px-8 pt-6 " style={{backgroundImage:"url(/images/mobile_auth_bg.png)"}}>
                <div>
                    <h2 className="text-2xl font-normal text-primary ">Logo</h2>
                    {
                        login ? <div className="mt-4 text-white font-semibold" onClick={()=>setLoagin(false)}>

                            <h2 className="font-extralight"> <span className="font-normal">Sign In</span> to view all the massage therapists</h2>
                            
                        </div> :

                        <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-heading">Sign In To Your Account</h3>
                        <p className="text-white text-pretty text-sm font-light text-left">elcome Back! By click the sign up button, you&lsquo;re agree to
                            Zenitood Terms and Service and acknlowledge the <span className="text-[#4285F3] underline">Privacy and Policy</span></p>

                            <div className="  mx-auto bg-[#0000000d] backdrop-blur-md grid place-items-center">
                                        <div className="p-4 bg-[#3d593eb9] rounded-lg backdrop-blur-md text-center space-y-2">
                                                <h3 className="text-xl font-semibold text-primary" onClick={()=> setLoagin(true)}>Login Account</h3>
                                                <p className="text-xl  text-white">Fill in Your information</p>
                                        </div>
                            </div>
                    </div>
                    }
                </div>

                <div className={`bg-white w-full h-screen fixed left-0 p-4  text-left rounded-3xl ${login ? "top-[25%]":"top-[100%]"} transition-all ease-out `}>


                                <div className="space-y-6">
                                <div>
                                <h2 className="text-nowrap text-center text-lg">Log In To Your Account</h2>
                                <p className="font-light text-sm">Welcome Back! Select a method to log in:</p>
                                </div>
                                <div className="flex gap-12 ">
                                    <GoogleBtn />
                                    <FacebookBtn/>
                                </div>
                                
                                    
                                    <div className="diveder-mobile text-center text-sm ">Or Continue with Email</div>
                                </div>
                                <form className="flex flex-col">
                                    
                                        <Input label="Email" placeholder="Enter your email" />
                                        <PasswordInput label="Password" placeholder="Enter your password"/>
                                        
                                        <CheckBox/>
                                        <Button className="mx-auto  ">Sign in</Button>
                                </form>
                                <p className="text-sm mt-4">Don’t Have an Account? <Link to="/register" className="text-primary underline">Create Account</Link></p>
                    </div>
        </div>
    );
};

export default MobileLogin;