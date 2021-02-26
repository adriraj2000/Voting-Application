import axios from 'axios';

export const setToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else{
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const call = async(method,path,data) => {
    const response = await axios[method](`/api/${path}`,data);
    return response.data;
}

export default {setToken,call};