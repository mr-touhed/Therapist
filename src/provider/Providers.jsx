import { createContext,  useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut, updateProfile  } from "firebase/auth";
import { app } from "../utils/firebase.config";

 

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
        const info = {message:"", status:false}
        try {
            
            
            const create_user = await createUserWithEmailAndPassword(auth,email,password) 
            if(create_user){
                //
                
                    if(create_user){
                           await updateProfile(auth.currentUser, {displayName:username , photoURL: ""})
                           info.status = true
                            return info;
                    }
                    
                    
            }else{
                info.message = "some things went's wrong";
                info.status = false;
                return info;
            }
        } catch (error) {
            info.message = error.message;
            info.status = false;
             return info
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

    const logOut = async () =>{
        try {
             await  signOut(auth);
             setUser(null)
        } catch (error) {
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
        login_with_email,
        logOut

    }

    return (
        <Authcontext.Provider value={store}>
            {children}
        </Authcontext.Provider>
    );
};

export default Providers;