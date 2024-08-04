import { createContext,  useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut, updateProfile  } from "firebase/auth";
import { app } from "../utils/firebase.config";

 

export const Authcontext = createContext(null);

const auth = getAuth(app) 

// eslint-disable-next-line react/prop-types
const Providers = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null); // user state 
    const [isLoading,setIsLoading] = useState(true) // loading state
   
    const GoogleProvider = new GoogleAuthProvider() // google provider

        
    const googleSing = async () =>{  
            try {
                // google sign in handler 
                    await  signInWithPopup(auth, GoogleProvider)
            } catch (error) {
                console.log(error);
            }
    }
    // cerate user handler
    const create_user  = async (username,email,password) => {
        const info = {message:"", status:false}
        try {
             const create_user = await createUserWithEmailAndPassword(auth,email,password) // cerate user function firebase
            if(create_user){
                // if(create_user)
                    {
                           await updateProfile(auth.currentUser, {displayName:username , photoURL: ""}) // current user updated user name
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
             return info // return error data
        }
    }

    // login with email 
    const login_with_email = async (email,password) =>{
        const info = {message:"", status:false}
        try {
            //
            const result  = await signInWithEmailAndPassword(auth,email,password )  // sign in function  
            if(result){
                info.status = true;
                info.message = result;
                return info // return after login success
                
            }
        } catch (error) {
            //
            console.log(error);
            info.message = error.message;
            info.status = false;
             return info
        }
    }
    // logout current user function 
    const logOut = async () =>{
        try {
             await  signOut(auth);
             setCurrentUser(null)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        
        // Set up the listener and return the unsubscribe function
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
                try {
                 setCurrentUser(user)
                setIsLoading(false)
                
                } catch (error) {
                        console.log(error);
                }
    
                console.log("provider state ",user);
            })
        
        // Clean up the listener on component unmount
       return ()=> unsubscribe()

       
        
    }, [isLoading])

    const store = {  // provider store
        currentUser,
        isLoading,
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