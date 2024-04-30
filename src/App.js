// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme/theme";
import Home from "./pages/Home";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} /> // Render Home if logged in
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/welcome" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
