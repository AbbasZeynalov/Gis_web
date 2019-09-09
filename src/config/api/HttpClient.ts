import axios from 'axios'
import {handleSpinner} from "../../actions/SpinnerAction";
import store from "../../store";

const HttpClient = axios.create();

HttpClient.interceptors.request.use(
    (config: any) => {
        const token = sessionStorage.getItem('token');

        if(token) {
            config.headers['Authorization'] = token;
        }

        store.dispatch(handleSpinner(true));

        return config;
    },
    (error: Error) => {

        let variant = 'error';
        store.dispatch(handleSpinner(false));
        store.getState().SnackBar.SnackBarFunction('Xəta baş verdi', {variant})

        return Promise.reject(error);
    }
);

HttpClient.interceptors.response.use(
    (response: any) => {
        store.dispatch(handleSpinner(false));

        return response;
    },
    (error: Error) => {
        let variant = 'error';

        store.dispatch(handleSpinner(false));
        store.getState().SnackBar.SnackBarFunction('Xəta baş verdi', {variant})

        return Promise.reject(error);
    }
);

export default HttpClient;
