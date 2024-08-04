import { useContext } from "react";
import { Authcontext } from "../provider/Providers";


const useContextHooks = () => {
    const {user,loading,googleSing,create_user,login_with_email,logOut} = useContext(Authcontext);

    
    
    
    return {user,loading,googleSing,create_user,login_with_email,logOut}
        
    
};

export default useContextHooks;