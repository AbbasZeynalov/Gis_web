import React from "react";

export interface IAppTableContainer {
    dataCount: number
    children: any
}

export interface IAppTableComponentProps {
    children: any
    dataCount: number
    rowsPerPage: number
    page: number
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
