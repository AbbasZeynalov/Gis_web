export interface IUser {
    username: string
    firstname: string
    lastname: string
    patronymic: string
    email: string
    access_token?: string
    userPermissions: any
}

export interface IUserPermissions {
    id: number;
    user: IUser;
    permissionOperation: IPermissionOperation;
    permissionEntity: IPermissionEntity;
}

export interface IPermissionOperation {
    id: number
    name: string
}

export interface IPermissionEntity {
    id: number
    name: string
}
