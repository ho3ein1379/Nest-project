import axios from "axios";
import {toast} from "react-toastify";


const apiClient = axios.create({
    baseURL: 'https://nest.navaxcollege.com/api',
    timeout: 120000
});

apiClient.interceptors.request.use(function (request) {
    const token = window.localStorage.getItem("token");
    if (token) {
        request.headers.Authorization = "Bearer " + token;
    }
    return request;
})

apiClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {

    if (error.response) {
        if (error.response.status === 404) {
            toast.error('منابع درخواستی وجود ندارد.');
        }else if (error.response.status === 403) {
            toast.error('شما دسترسی به این منابع را ندارید.');
        }else if (error.response.status === 401) {
            toast.error('لطفا وارد شوید.');
        }

    } else if (error.request) {
        toast.error('ارتباط با سرور برقرار نیست.');
    } else {
        toast.error('خطای نامعلوم!');
    }

    return Promise.reject(error);
});

export default apiClient;