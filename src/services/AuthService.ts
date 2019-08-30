import HttpClient from "../config/api/HttpClient";
import ApiConfig from "../config/api/ApiConfig";
import {AxiosResponse} from "axios";
import {ILoginForm} from "../models/AuthModel";
import store from "../store";
import {IResponse} from "../models/HttpModel";

export const LoginService = async (loginForm: ILoginForm): Promise<AxiosResponse<IResponse>> =>  {

    let query = ` mutation {
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

    checkShowSnackBar(response, 'Sistemə daxil oldunuz');  // show success Snackbar

    return response;
};

const checkShowSnackBar = (response: IResponse, message: string) => {
    if (response.status === 200) {
        let variant = 'success'
        store.getState().SnackBar.SnackBarFunction(message, {variant})
    }
};
