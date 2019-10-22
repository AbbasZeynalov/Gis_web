import {AxiosResponse} from "axios";
import {IResponse} from "../../models/HttpModel";
import HttpClient from "../../config/api/HttpClient";
import ApiConfig from "../../config/api/ApiConfig";
import {HttpRequest} from "../../utils/helpers/HttpHelper";

export const getPlugins = (offset: number, limit: number): Promise<AxiosResponse<IResponse>> => {
    const query = `query {
                        modules(offset: ${offset}, limit: ${limit}){
                            items {
                                name, 
                                url,
                                version {
                                    version
                                }
                            },
                            totalCount
                        }
                    }`;

    return HttpClient.post<IResponse>(ApiConfig.instance.api, {query});
};

export const syncPlugins = (): Promise<AxiosResponse<IResponse>> => {
    const query = `query {
                        synchronizeModules {
                           success
                        }
                    }`;

    return HttpRequest(query);
} ;
