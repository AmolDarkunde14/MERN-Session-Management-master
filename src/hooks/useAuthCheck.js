import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import authService from "../services/authService";

const useAuthCheck = (navigate) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Check if user is authenticated when component mounts
        authService.checkAuth()
            .then(res => {
                setLoggedIn(res.data.authenticated);
                if (res.data.authenticated) {
                    setUsername(res.data.username); // Set username if authenticated
                    navigate('/welcome');
                }
            })
            .catch(err => console.error(err));
    }, []);

    return {loggedIn,setLoggedIn,username,setUsername};
};

export default useAuthCheck;
