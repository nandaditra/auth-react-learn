import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        onAuthStateChanged(auth, (user)=> {
            if(user) {
                const uid = user.uid;
                console.log("uid", uid)
            } else {
                console.log("user us logged out")
            }
        })
    }, [])

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <>
            <nav>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>

            <section>

        </section>
        </>
    
    )
}

export default Home