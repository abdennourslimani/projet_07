import * as axios from 'axios';


const apiAuth = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
})

const token = localStorage.getItem('Token');

apiAuth.interceptors.request.use(req => {
    req.headers['Authorization'] = `Bearer ${token}`
    return req
})



export default apiAuth;