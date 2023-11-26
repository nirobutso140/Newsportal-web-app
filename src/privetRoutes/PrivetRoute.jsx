

import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";



const PrivetRoute = ({children}) => {

   const {user, loading} = useContext(AuthContext)
   if(loading){
      return <span className="loading loading-spinner text-secondary"></span>
   }
   if(user){
     return children
   }
    return <Navigate to='/login'></Navigate>
    
};

export default PrivetRoute;