// client/src/services/api.js

import axios from 'axios';

//const API_URL = 'http://localhost:5000/api';
//const API_URL = 'http://192.168.120.40:5000/api';


export const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
    });
    return response.data;
};
