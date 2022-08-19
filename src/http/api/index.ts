import defHttp from '@/http/axios'

enum Api {
    ACCOUNT_INFO = '/sug',
}

export const sessionTimeoutApi = (data?: any) => defHttp.get(Api.ACCOUNT_INFO, { params: (data) });

