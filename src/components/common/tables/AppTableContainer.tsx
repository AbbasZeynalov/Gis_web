import React from 'react';
import AppTableComponent from "./AppTableComponent";
import {IAppTableContainer} from "../../../models/AppTableModel";

export const MyContext = React.createContext({page: 0, rowsPerPage: 0});

const AppTableContainer = React.memo((props: IAppTableContainer) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const {children, dataCount} = props;

    function handleChangePage(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        newPage: number
    ) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const appTableComponentProps = {
        children: children,
        dataCount: dataCount,
        rowsPerPage: rowsPerPage,
        page: page,
        handleChangePage: handleChangePage,
        handleChangeRowsPerPage: handleChangeRowsPerPage
    };

    return <AppTableComponent {...appTableComponentProps} />;
});

export default AppTableContainer;
