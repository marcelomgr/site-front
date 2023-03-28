import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7058/Default/'
    // baseURL: 'https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api'
})

export default api;