export const API_DOMAIN_LOCAL = 'localhost';
export const API_DOMAIN_DEV = '172.30.20.212';
export const API_PORT = '3200';
export const API_ENDPOINT_LOCAL = `http://${API_DOMAIN_LOCAL}:${API_PORT}/graphql`;
export const API_ENDPOINT_DEV = `http://${API_DOMAIN_DEV}:${API_PORT}/graphql`;
export const ENV_LOCAL = 'local';
export const ENV_DEV = 'dev';

export const ENVS = {
    [API_DOMAIN_LOCAL]: ENV_LOCAL,
    [API_DOMAIN_DEV]: ENV_DEV
};

let domain = window.location.hostname;
let env:string = ENV_LOCAL;

if(ENVS.hasOwnProperty(domain)) {

    // @ts-ignore
    env = ENVS[domain];
}

export const ENV = env;
