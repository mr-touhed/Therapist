
import Input from "../Input";
import Button from "../Button";
import PasswordInput from "../PasswordInput";
import GoogleBtn from "../GoogleBtn";
import FacebookBtn from "../FacebookBtn";
import { Link } from "react-router-dom";
import CheckBox from "../CheckBox";
// eslint-disable-next-line react/prop-types
const PcLogin = ({input_handler,handel_login,error,loading,user}) => {
    return (
        <div className="grid grid-cols-2 place-content-center m-4 gap-4"> 
                    <section className="max-w-[500px] ">
                            <div className="space-y-4 ">
                            <h1 className="text-3xl text-primary ">LOGO</h1>
                        <h2 className="text-3xl font-semibold text-heading">Log In To Your Account</h2>
                        <p className="font-normal">Welcome Back! Select a method to log in:</p>

                        <div className="flex gap-12 ">
                                    <GoogleBtn />
                                    <FacebookBtn/>
                        </div>
                                
                                    
                                    <div className="diveder text-center text-sm ">Or Continue with Email</div>
                                
                            </div>
                            
                            <form onSubmit={handel_login} className="space-y-4 mt-8">
                                
                                <Input value={user.email} onChange={(e)=>input_handler(e)} label="Email" placeholder="Enter your email" type="email" name="email" required/>
                                                             
                                <PasswordInput value={user.password} onChange={(e)=>input_handler(e)} label="Password" placeholder="Enter your password" name="password" required/>
                                
                                <div className="flex justify-between">
                                <CheckBox required text="Remember me" className="text-[#5C635A] text-sm" />
                                <Link to="/" className="text-primary text-sm underline">Forgot password?</Link>
                                </div>
                                <Button disabled={loading}>Sign in</Button>
                                <p className="text-xs font-light text-balance text-[#fc5f5f]">{error}</p>
                                <p className="text-sm ">Don’t Have an Account?  <Link to="/register" className="text-primary underline">Create Account</Link></p>
                            </form>
                    </section>

                    <section className="w-full h-auto rounded-3xl overflow-hidden" style={{backgroundImage:"url(/images/auth_bg.png)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                            <div className=" w-full h-full bg-[#0000000d] backdrop-blur-md grid place-items-center">
                                        <div className="p-16 bg-[#3d593eb9] rounded-lg backdrop-blur-md text-center space-y-2">
                                                <h3 className="text-xl font-semibold text-primary">Create Account</h3>
                                                <p className="text-xl  text-white">Fill in Your information</p>
                                        </div>
                            </div>
                    </section>
        </div>
    );
};

export default PcLogin;