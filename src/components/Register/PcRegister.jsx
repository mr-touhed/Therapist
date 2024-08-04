import { Link } from "react-router-dom";
import Input from "../Input";
import CheckBox from "../CheckBox";
import Button from "../Button";
import PasswordInput from "../PasswordInput";


// eslint-disable-next-line react/prop-types
const PcRegister = ({handel_register,loading,error,user,input_handler}) => {
        
       

   

    return (
        <div className="grid grid-cols-2 place-content-center m-4 gap-4"> 
                    <section className="max-w-[500px] ">
                            <div className="space-y-4">
                            <h1 className="text-3xl text-primary ">LOGO</h1>
                        <h2 className="text-3xl font-semibold text-heading">Sign In To Your Account</h2>
                        <p className="font-normal">elcome Back! By click the sign up button, you&lsquo;re agree tobZenitood Terms and Service and acknlowledge the <br/><Link className="text-primary underline">Privacy and Policy</Link></p>
                            </div>

                            <form onSubmit={handel_register} className="space-y-4 mt-8">
                                <Input onChange={(e)=> input_handler(e)} value={user.username} label="Name" placeholder="@username" type="text" name="username" required/>
                                <Input onChange={(e)=> input_handler(e)} value={user.email} label="Email" placeholder="Enter your email" type="email" name="email" required/>
                                                             
                                <PasswordInput onChange={(e)=> input_handler(e)} value={user.password} label="Password" placeholder="Enter your password" name="password"  required/>
                                <PasswordInput onChange={(e)=> input_handler(e)} value={user.confirmPass} label="Confirm password" placeholder="Re-type password" name="confirmPass" required/>
                                <CheckBox required text="Accept Terms of Service" className="text-md text-primary"/>
                                <Button disabled={loading}>Sign up</Button>
                                    <p className="text-xs font-light text-balance text-[#fc5f5f]">{error}</p>
                                <p className="text-sm">Already Have an Account? <Link to="/login" className="text-primary underline">Log in</Link></p>
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


export default PcRegister;