import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const UserToContext=createContext(null);
// const user = {displayName:'Tapas'}


const auth =getAuth(app);

const UserContext = ({children}) => {
const[user,setUser]=useState(null);
const[loadding,setLoadding]=useState(true);
    
const register=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const singIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut=()=>{
    return signOut(auth);
}

// state change to monitor user login or not setp 1

useEffect(()=>{
    const unsbuscribe=onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser);
        setLoadding(false);
    });
    return ()=>{
        unsbuscribe()
    };

},[])



const authInfo={
    user,
    loadding,
    register,
    singIn,
    logOut,

}

    return (
        <UserToContext.Provider value={authInfo}>
            {children}
        </UserToContext.Provider>
    );
};

export default UserContext;