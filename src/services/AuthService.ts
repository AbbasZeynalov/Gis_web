import HttpClient from "../config/api/HttpClient";
import ApiConfig from "../config/api/ApiConfig";
import {AxiosResponse} from "axios";
import {ILoginForm} from "../models/AuthModel";
import store from "../store";
import {IResponse} from "../models/HttpModel";

export const LoginService = async (loginForm: ILoginForm): Promise<AxiosResponse<IResponse>> =>  {
    const query = ` mutation {
              login ( username: "${loginForm.username}", password: "${loginForm.password}" ) {
                  id,
                  username,
                  firstname,
                  lastname,
                  patronymic,
                  email,
                  access_token
              }
            }`;

    const response = await HttpClient.post<IResponse>(ApiConfig.instance.api, {query});

    main.checkShowSnackBar(response.status, 'Sistemə daxil oldunuz');  // show success Snackbar

    return response;
};

export const checkShowSnackBar = (status: number, message: string) => {
    if (status === 200) {
        const variant = 'success';
        store.getState().SnackBar.SnackBarFunction(message, {variant})
    }
};

const main = {
    LoginService,
    checkShowSnackBar,
};

export default main;
