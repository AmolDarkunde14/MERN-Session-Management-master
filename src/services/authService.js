// services/authService.js
import axios from 'axios';

const authService = {
    checkAuth: () => {
        return axios.get('http://localhost:5000/checkAuth', { withCredentials: true });
    },
    login: (username, password) => {
        return axios.post('http://localhost:5000/login', { username, password }, { withCredentials: true });
    },
    signup: (username, password) => {
        return axios.post('http://localhost:5000/signup', { username, password }, { withCredentials: true });
    },
    logout: () => {
        return axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
    }
};

export default authService;
