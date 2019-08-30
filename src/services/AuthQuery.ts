import HttpClient from "../config/api/HttpClient";
import ApiConfig from "../config/api/ApiConfig";
import {AxiosResponse} from "axios";
import {ILoginForm} from "../models/AuthModel";
import {IUser} from "../models/UserModel";
import store from "../store";

export const login = async (loginForm: ILoginForm): Promise<AxiosResponse<IUser>> =>  {

    let query = ` mutation {
              login ( username: "${loginForm.username}", password: "${loginForm.password}" ) {
                  username,
                  firstname,
                  lastname,
                  email,
                  access_token
              }
            }`;

    const response = await HttpClient.post<any>(ApiConfig.instance.api, {query});

    checkShowSnackBar(response, 'Sistemə daxil oldunuz')

    return response;
};

const checkShowSnackBar = (response: any, message: string) => {
    if (response.status === 200) {
        let variant = 'success'
        store.getState().SnackBar.SnackBarFunction(message, {variant})
    }
}
