// pages/SignupPage.js
import React, {useEffect, useState} from 'react';
import SignupForm from '../Components/Auth/SignupForm';
import axios from "axios";
import {useNavigate} from "react-router";
import useAuthCheck from "../hooks/useAuthCheck";
import authService from "../services/authService";



const SignupPage = () => {

    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const navigate = useNavigate();
    const {loggedIn,setLoggedIn,username,setUsername} = useAuthCheck(navigate);


    const handleSignup = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        if (signupUsername !== '' && signupPassword !== '') {
            try {
                await authService.signup(signupUsername,signupPassword)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
                    .catch(err => console.error(err));
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div style={{
            height:'100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            background: 'linear-gradient(to bottom, darkgray, lightblue)', // Blue gradient
        }}>
            <SignupForm
                    signupUsername={signupUsername}
                    signupPassword={signupPassword}
                    setSignupUsername={setSignupUsername}
                    setSignupPassword={setSignupPassword}
                    handleSignup={handleSignup}
            />
        </div>
    );
};

export default SignupPage;