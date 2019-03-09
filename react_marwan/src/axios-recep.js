import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.instagram.com/v1/users/self/media'
});

instance.defaults.headers.common['Authorization'] = 'Asxqb7JclJWcm2WBUeASJbD07tfi1YBJ8AGrFrn0';

// instance.interceptors.request...  we can set up our own interceptors 

export default instance;