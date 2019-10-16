import HttpClient from "../../config/api/HttpClient";
import {IResponse} from "../../models/HttpModel";
import ApiConfig from "../../config/api/ApiConfig";

export const HttpRequest = (query: string) => {

    return HttpClient.post<IResponse>(ApiConfig.instance.api, {query});
};
