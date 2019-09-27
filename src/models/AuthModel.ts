import {BaseSyntheticEvent, MouseEvent} from "react";
import {IUser} from "./UserModel";
import {RouteComponentProps} from "react-router";
import {RouterMatch} from "./RouterModel";

export interface ILoginContainerProps extends RouteComponentProps<RouterMatch>{
    Login: (loginForm: ILoginForm) => any
    Auth?: IUser
}

export interface ILoginComponentProps {
    username: {
        value: string
        error: string
    }
    password: {
        value: string
        error: string
    }
    onChange: (e: BaseSyntheticEvent) => void
    onSubmit: (e: MouseEvent<HTMLFormElement>) => void
}

export interface ILoginForm {
    username: string
    password: string
}
