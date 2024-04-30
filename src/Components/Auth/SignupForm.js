import React, { useState } from 'react';
import {
    TextField,
    Button,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';
import { Link } from "react-router-dom";

const SignupForm = ({ signupUsername, signupPassword, setSignupUsername, setSignupPassword, handleSignup }) => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleChangePassword = (e) => {
        const password = e.target.value;
        setSignupPassword(password);
        if (password.length < 8 && password !== 'admin') {
            setPasswordError('Minimum 8 characters.');
        } else {
            setPasswordError('');
        }
    };

    const handleChangeConfirmPassword = (e) => {
        const confirmPasswordValue = e.target.value;
        setConfirmPassword(confirmPasswordValue);
        if (confirmPasswordValue !== signupPassword) {
            setConfirmPasswordError('Passwords do not match.');
        } else {
            setConfirmPasswordError('');
        }
    };

    return (
        <div style={{

            border: '1px solid',
            borderRadius: 5,
            padding: 20,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            maxWidth: 350,
        }}>
            <form onSubmit={handleSignup}>
                <CardContent >
                    <Typography variant="h4" gutterBottom>
                        Signup
                    </Typography>

                    <TextField required label="Username" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} fullWidth margin="normal" />
                    <TextField
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        value={signupPassword}
                        onChange={handleChangePassword}

                        margin="normal"
                        error={!!passwordError}
                        helperText={passwordError}
                    />
                    <TextField
                        required
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        fullWidth
                        margin="normal"
                        error={!!confirmPasswordError}
                        helperText={confirmPasswordError}
                    />


                </CardContent>
                <CardActions>
                    <Button fullWidth type='submit' variant="contained" disabled={passwordError !== ''}>
                        Signup
                    </Button>
                </CardActions>
            </form>
            <CardActions sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop:5,
                }}>
                <Typography varient="body1">Already have an Account?</Typography>
                <Button component={Link} to="/">
                    Login
                </Button>
            </CardActions>
        </div>
    );
};

export default SignupForm;
