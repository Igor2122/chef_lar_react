import axios from 'axios';

const fetchRecepies = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/recepies/'
});

// LV passport will come here
// fetchRecepies.defaults.headers.common['Authorization'] = '285502478.8001032.48720ae4588d48c9be566f37274a24ff';

// fetchRecepies.interceptors.request...  we can set up our own interceptors 

export default fetchRecepies;