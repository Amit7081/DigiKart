import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [data,setData] = useState();
    useEffect(()=>{
    
   const fetchData = async()=>{
     const url = `https://fakestoreapi.in/api/products?limit=150`;
  
     try{
    const res = await axios.get(url);
    setData(res.data)
    //  console.log(res.data);

     }
     catch(err)
     {
        console.log(err);
     }
 
   }
   fetchData();
    },[])

  return (
   <AuthContext.Provider value = {{data,setData}}>
      {children}
   </AuthContext.Provider>
  )
}


