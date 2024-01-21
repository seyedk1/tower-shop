import interceptor from './interceptor';
import axios from 'axios';

// global axios defaults
axios.defaults.baseURL = '';
axios.defaults.timeout = 5000;  //If server won't respond in 5 seconds, it goes into catch block.
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// const token = localStorage.getItem('token')
// if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }

// add interceptors
axios.interceptors.request.use(interceptor.request, interceptor.requestError);
axios.interceptors.response.use(interceptor.response, interceptor.responseError);


