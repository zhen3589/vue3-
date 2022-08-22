import axios from 'axios'
import router from '@/router'

const defHttp = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_PATH,
    timeout: 3000,
    headers: {
        'token': '1123'
    }
})

// interceptors axios的拦截器对象
defHttp.interceptors.request.use(config => {

    return config
}, err => {
    Promise.reject(err)
})

defHttp.interceptors.response.use(res => {

    if (res.status === 200) {

        const { code, data } = res.data;

        if (code === 200) {
            return Promise.resolve(data)
        } else if (code === 401) {
            
            return router.push({
                path:'/login'
            })
        }

    }
    
}, err => {
    Promise.reject(err)
})

export default defHttp
