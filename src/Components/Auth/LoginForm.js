import React, { useState } from 'react';
import {
    TextField,
    Button,
    CardContent,
    CardActions,
    Typography,

} from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = ({ username, password, setUsername, setPassword, handleLogin }) => {
    const [passwordError, setPasswordError] = useState('');

    const handleChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    return (
        <div style={{

        border: '1px solid',
            borderRadius: 5,
            padding: 20,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            maxWidth: 350,
        }}>
            <form onSubmit={handleLogin}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        required
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handleChangePassword}
                        fullWidth
                        margin="normal"
                    />
                </CardContent>
                <CardActions sx={{
                    paddingTop:1,
                }}>
                    <Button fullWidth type='submit' variant="contained" disabled={passwordError !== ''}>
                        Login
                    </Button>
                </CardActions>
            </form>
            <CardActions sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop:5,
                }}>
                <Typography varient="body1">Dont have an Account?</Typography>
                <Button component={Link} to="/signup">
                        Signup
                </Button>
            </CardActions>
        </div>
    );
};

export default LoginForm;
