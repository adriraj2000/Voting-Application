import axios from 'axios';
const {CLIENT_URL} = process.env

export const setToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else{
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const call = async(method,path,data) => {
    const response = await axios[method](`${CLIENT_URL}/${path}`,data);
    return response.data;
}

export default {setToken,call};