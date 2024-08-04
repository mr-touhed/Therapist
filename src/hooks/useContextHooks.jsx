import { useContext } from "react";
import { Authcontext } from "../AuthContext/Providers";


const useContextHooks = () => {
    const {currentUser,isLoading,googleSing, create_user,login_with_email,logOut} = useContext(Authcontext);

    
    
    
    return {currentUser,isLoading,googleSing, create_user,login_with_email,logOut}
        
    
};

export default useContextHooks;