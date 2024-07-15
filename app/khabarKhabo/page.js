"use client"
import React, { useState } from 'react';
import Login from '../_components/loginPage';
import Regestation from '../_components/regestation';

const KhabarKinbo = () => {
    const [login,setLogin] = useState(true)
    return (
        <> 
        {
            login?  <Login></Login> : <Regestation></Regestation>
        }
           <button onClick={()=> setLogin(!login)}>{ login? "Sing Up" : "Login" }</button>
            
        </>
    );
}

export default KhabarKinbo;
