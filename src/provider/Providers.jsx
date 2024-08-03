import { createContext,  useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../utils/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
 

export const Authcontext = createContext(null);



// eslint-disable-next-line react/prop-types
const Providers = ({children}) => {
    const [user,setUser] = useState(null); // user state 
    const [loading,setLoading] = useState(true) // loading state
    const auth = getAuth(app) 
    const GoogleProvider = new GoogleAuthProvider() // google provider

    
    const googleSing = async () =>{  
            try {
                // google sign in handler 
                    await  signInWithPopup(auth, GoogleProvider)
            } catch (error) {
                console.log(error);
            }
    }

    const create_user  = async (username,email,password) => {
        const data =  {message:"", status:false}
        try {
            //
            const create_user = await createUserWithEmailAndPassword(auth,email,password) 
            if(create_user){
                //
                    console.log(create_user);
            }else{
                //
                
            }
        } catch (error) {
            data.message = error.message;
            data.status = false;
            
            console.log(error);
                return data

        }
    }

    // login with email 
    const login_with_email = async (email,password) =>{
        try {
            //
            const result  = await signInWithEmailAndPassword(auth,email,password ) 
            if(result){
                console.log(result );
            }
        } catch (error) {
            //
            console.log(error);
        }
    }
    useEffect(() =>{

        // get current user from firebase and set state
        const unsubscribe = () => onAuthStateChanged(auth, (user) =>{
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe() // unsubscribe for unwanted rendering 
    }, [auth])

    const store = {  // provider store
        user,
        loading,
        googleSing,
        create_user,
        login_with_email

    }

    return (
        <Authcontext.Provider value={store}>
            {children}
        </Authcontext.Provider>
    );
};

export default Providers;