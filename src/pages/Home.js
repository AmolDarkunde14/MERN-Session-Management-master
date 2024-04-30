import React, { useEffect, useState } from 'react';
import { Typography, CardContent, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '../style/style.css'
import authService from "../services/authService";

const Home = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data after login
        authService.checkAuth()
            .then(res => {
                if (res.data.authenticated) {
                    setUsername(res.data.username);
                } else {
                    navigate('/'); // Redirect to login page if not authenticated
                }
            })
            .catch(err => console.error(err));
        // Add event listener for window close
        window.addEventListener('beforeunload', handleWindowClose);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('beforeunload', handleWindowClose);
        };
    }, [navigate]);

    const handleLogout = () => {
        authService.logout()
            .then(res => {
                navigate('/'); // Redirect to login page after logout
            })
            .catch(err => console.error(err));
    };

    const handleWindowClose = (event) => {
        // Constructing a URL for the logout endpoint
        const logoutEndpoint = 'http://localhost:5000/logout';

        // Creating a form data object with minimal data
        const formData = new FormData();
        formData.append('logout', 'true');

        // Sending a beacon with the logout data
        navigator.sendBeacon(logoutEndpoint, formData);

        console.log("Session cookie cleared");
    };

    return (
        <div className="home-page-container">
            <div className="sidebar">
                <div className="sidebar-item">
                    <Button fullWidth variant="text" className="sidebar-link">
                        Home
                    </Button>
                </div>
                <div className="sidebar-item">
                    <Button fullWidth variant="text" className="sidebar-link">
                        About Us
                    </Button>
                </div>
                <div className="sidebar-item">
                    <Button fullWidth variant="text" className="sidebar-link">
                        Customer Support
                    </Button>
                </div>
                <div className="sidebar-item">
                    <Button fullWidth variant="text" className="sidebar-link">
                        Account Overview
                    </Button>
                </div>
                <div className="sidebar-item">
                    <Button fullWidth variant="text" className="sidebar-link">
                        Online Banking Security
                    </Button>
                </div>
                <div className="sidebar-item">
                    <Button fullWidth variant="text" className="sidebar-link">
                        Branch and ATM
                    </Button>
                </div>
                <div className="sidebar-item">
                    <Button fullWidth variant="text" className="sidebar-link">
                        Privacy and Policy
                    </Button>
                </div>
            </div>
            <div className="main-content">
                <div className="banking-home-content">
                    <CardContent className="banking-home-header">
                        <Typography variant="h4" gutterBottom className="global-bank-title">
                            Global Bank
                        </Typography>
                    </CardContent>
                    <CardContent className="banking-home-greeting">
                        <Typography variant="subtitle1" color="text.secondary">
                            Welcome, <span className="username">{username}</span>
                        </Typography>
                    </CardContent>
                    <CardContent className="banking-home-info">
                        <Box className="banking-home-info-item">
                            <Typography variant="subtitle1" color="text.secondary">
                                Account Balance: $XXXX.XX
                            </Typography>
                        </Box>
                        <Box className="banking-home-info-item">
                            <Typography variant="subtitle1" color="text.secondary">
                                Account Type: Savings
                            </Typography>
                        </Box>
                        <Box className="banking-home-info-item">
                            <Typography variant="subtitle1" color="text.secondary">
                                Last Transaction: XXXX
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardContent className="banking-home-actions">
                        <Button fullWidth variant="contained" className="action-button">
                            View Transactions
                        </Button>
                        <Button fullWidth variant="contained" className="action-button">
                            Transfer Money
                        </Button>
                        <Button fullWidth variant="contained" onClick={handleLogout} className="logout-button">
                            Logout
                        </Button>
                    </CardContent>
                </div>
            </div>
        </div>
    );
};

export default Home;
