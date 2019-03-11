import axios from 'axios';


const recepiesApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/categories/',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});



export default recepiesApi;
