import {BaseSyntheticEvent, MouseEvent} from "react";

export interface ILoginContainerProps {
    Login: (loginForm: ILoginForm) => any
}

export interface ILoginComponentProps {
    username: string
    password: string
    onChange: (e: BaseSyntheticEvent) => void
    onSubmit: (e: MouseEvent<HTMLElement>) => void
}

export interface ILoginForm {
    username: string
    password: string
}
