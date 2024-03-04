import { AxiosResponse } from 'axios'

/**
 * 请求响应拦截器
 * @param {object} response 响应体
 * @returns {Promise|*} 当合并请求中存在异常则抛出Error，否则原样返回
 */
const onResponseInterceptor = (response: AxiosResponse) => {
    return response.data
}

export default onResponseInterceptor
