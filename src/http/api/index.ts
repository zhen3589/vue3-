import defHttp from '@/http/axios'

enum Api {
    ACCOUNT_INFO = '/sentences',
}

export const sessionTimeoutApi = (data?: any) => defHttp.get(Api.ACCOUNT_INFO, { params: (data) });

