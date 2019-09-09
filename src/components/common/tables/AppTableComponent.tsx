import React from "react";
import Table from "@material-ui/core/Table";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import Paper from "@material-ui/core/Paper";
import {MyContext} from "./AppTableContainer";
import {AppTableAsset} from "../../../assets/material/TableAsset";
import {IAppTableComponentProps} from "../../../models/AppTableModel";

const AppTableComponent = React.memo((props: IAppTableComponentProps) => {
    const classes = AppTableAsset();
    const {children, dataCount, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage} = props;

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <MyContext.Provider value={{page: page, rowsPerPage: rowsPerPage}}>
                        {
                            children   // Table body
                        }
                    </MyContext.Provider>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={dataCount}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </Paper>
    )
});

export default AppTableComponent;
