import * as axios from 'axios';


const apiPost = axios.create({
    baseURL: 'http://localhost:3000/api/post'
})

const token = localStorage.getItem('Token');

apiPost.interceptors.request.use(req => {
    req.headers['Authorization'] = `Bearer ${token}`
    return req
})



export default apiPost;