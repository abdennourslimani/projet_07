import * as axios from 'axios';


const apiAxios = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

const token = localStorage.getItem('Token');

apiAxios.interceptors.request.use(req => {
    req.headers['Authorization'] = `Bearer ${token}`
    return req
})



export default apiAxios;