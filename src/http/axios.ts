import axios from 'axios'

const defHttp = axios.create({
    baseURL: 'http://suggest.taobao.com',
    timeout: 3000,
    headers: {
        'token': '1123'
    }
})

// interceptors axios的拦截器对象
defHttp.interceptors.request.use(config => {
    console.log('拦截到了');
    console.log(config);
    
    return config
}, err => {
    Promise.reject(err)
})

defHttp.interceptors.response.use(res => {
    console.log(res)
    return Promise.resolve(res)
}, err => {
    Promise.reject(err)
})

export default defHttp
