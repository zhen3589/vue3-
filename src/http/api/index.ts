import defHttp from '@/http/axios'

enum Api {
    ACCOUNT_INFO = '/sentences',
    USER_IMAGES = '/getImages'
}

export const sessionTimeoutApi = (data?: any) => defHttp.get(Api.ACCOUNT_INFO, { params: (data) });

export const getImages = (data?: any) => defHttp.get(Api.USER_IMAGES, { params: (data) });
