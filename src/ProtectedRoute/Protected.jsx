import { Navigate } from "react-router-dom";
import useContextHooks from "../hooks/useContextHooks";


// eslint-disable-next-line react/prop-types
const Protected = ({children}) => {
    const {isLoading,currentUser} = useContextHooks()

    if(isLoading) return "Loading....";
    if(!currentUser) return <Navigate to="/register" replace={true}/> // not registered user redirect to registerd page

    return (
        children
    );
};

export default Protected;