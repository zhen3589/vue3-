import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'

const defHttp = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_PATH,
    timeout: 3000,
})

// interceptors axios的拦截器对象
defHttp.interceptors.request.use(config => {

    const token: string = localStorage.getItem('token') as string;
    if (token) {
        config.headers = {
            "token" : token
        };
    }

    if (config.method === 'post') {
        config.headers = {
            'Content-Type': "application/x-www-form-urlencoded";
        } 
    }

    return config
}, err => {
    Promise.reject(err)
})

defHttp.interceptors.response.use(res => {

    if (res.status === 200) {

        const { code, data } = res.data;

        if (code === 200) {
            return res.data;
        } else if (code === 401) {
            ElMessage({
                message: '登录失效请重新登录.',
                type: 'warning',
            })
            return router.push({
                path: '/login'
            })
        } else {
            ElMessage.error('系统错误')
        }

        return false;
    }

}, err => {
    ElMessage.error('系统错误')
    Promise.reject(err)
})

export default defHttp
