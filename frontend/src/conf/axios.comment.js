import * as axios from 'axios';


const apiComment = axios.create({
    baseURL: 'http://localhost:3000/api/comment'
})

const token = localStorage.getItem('Token');

apiComment.interceptors.request.use(req => {
    req.headers['Authorization'] = `Bearer ${token}`
    return req
})



export default apiComment;