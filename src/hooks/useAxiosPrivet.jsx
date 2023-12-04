import axios from 'axios';


const axiosPrivet = axios.create({
    baseURL: 'https://newsportal-server-one.vercel.app',
});

const useAxiosPrivet = () => {
    return axiosPrivet
};

export default useAxiosPrivet;