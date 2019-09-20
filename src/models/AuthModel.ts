import {BaseSyntheticEvent, MouseEvent} from "react";
import {IUser} from "./UserModel";
import {RouteComponentProps} from "react-router";
import {RouterMatch} from "./RouterModel";

export interface ILoginContainerProps extends RouteComponentProps<RouterMatch>{
    Login: (loginForm: ILoginForm) => any
    Auth?: IUser
}

export interface ILoginComponentProps {
    username: string
    password: string
    errors: ILoginForm
    onChange: (e: BaseSyntheticEvent) => void
    onSubmit: (e: MouseEvent<HTMLElement>) => void
}

export interface ILoginForm {
    username: string
    password: string
}
