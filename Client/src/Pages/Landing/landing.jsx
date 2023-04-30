import "./landing.css"
import "../../base.css"
import React, { useState,useEffect } from 'react';

export default function LandingPage(props) {

    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    }
    

    useEffect(() => {

        // check if script is already added
        if (document.getElementById("starsScript")) {
            return;

        }else{
            const script = document.createElement("script");
            script.src = "/script.js";
            script.async = true;
            script.id = "starsScript";
            document.body.appendChild(script);
        }


    }, []);

    
    return (
        <div className="container">
            <div id="stars"></div>

            <div className="Welcome">
                <h1>Welcome to the <span>Piston</span><span>Slap</span></h1>
                <h2>You're Friendly AI Mechanic</h2>

                <button className="btn" style={{padding: "10px 35px"}}>Get Started</button>
            </div>
            
         
        </div>
    )

}