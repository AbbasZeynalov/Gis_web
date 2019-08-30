
export default class ApiConfig {
    private static _instance: ApiConfig;
    private constructor() {}
    public static get instance(): ApiConfig {
        if(this._instance == null) {
            this._instance = new ApiConfig();
        }
        return this._instance
    }

    private get _host(): string {return 'http://localhost'}
    private get _port(): string {return '3200'}
    private get _api(): string {return 'graphql'}

    public get api(): string {return `${this._host}:${this._port}/${this._api}`}

}
