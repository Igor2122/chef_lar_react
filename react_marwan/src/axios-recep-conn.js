import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://marwannew-c69d8.firebaseio.com/',
});

export default instance;