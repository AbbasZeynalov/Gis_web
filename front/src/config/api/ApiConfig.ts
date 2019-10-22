import {API_ENDPOINT_DEV, API_ENDPOINT_LOCAL, ENV, ENV_DEV, ENV_LOCAL} from "../constants";

export default class ApiConfig {
    private static _instance: ApiConfig;

    private constructor() {
    }

    public static get instance(): ApiConfig {
        if (this._instance == null) {
            this._instance = new ApiConfig();
        }
        return this._instance
    }

    private get _host(): string {

        console.log('env: ',ENV);

        return 'http://localhost'
    }

    private get _port(): string {
        return '3200'
    }

    private get _api(): string {
        return 'graphql'
    }

    public get api(): string {

        switch (ENV) {
            case ENV_LOCAL: {
                return API_ENDPOINT_LOCAL;
            }
            case ENV_DEV: {
                return API_ENDPOINT_DEV
            }
            default: {
                return `${this._host}:${this._port}/${this._api}`
            }
        }
    }

}
