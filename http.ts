import { extend } from 'umi-request';

const request = extend({
    prefix: 'https://h5-api.srv.jidaihome.com',
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});
// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options: any) => {
    options.headers = { ... options.headers, 'Content-Type' : 'application/json'};
    return {
        url,
        options,
    };
});

// response拦截器, 处理response
request.interceptors.response.use((response, options) => {
    return response;
});

export default request;