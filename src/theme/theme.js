// theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#546e7a', // Define your primary color
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
