import React from "react";

// Material imports
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from '@material-ui/core/TableBody';

// Custom imports
import AppTableContainer, {MyContext} from "../../../../common/tables/AppTableContainer";
import TabUpdateHeader from "../update/TabUpdateHeader";
import PluginDetailsContainer from "../../plugin-details/PluginDetailsContainer";
import TabInstalledHeader from "./TabInstalledHeader";

function createData(name: string, calories: number, fat: number) {
    return { name, calories, fat };
}

const rows = [
    createData('tets', 305, 3.7),
    createData('tets', 452, 25.0),
    createData('tetstets', 262, 16.0),
    createData('tets yoghurt', 159, 6.0),
    createData('tets', 356, 16.0),
    createData('tets', 408, 3.2),
    createData('tets', 237, 9.0),
    createData('tets', 375, 0.0),
    createData('tets', 518, 26.0),
    createData('tets', 392, 0.2),
    createData('tets', 318, 0),
    createData('tets', 360, 19.0),
    createData('tets', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));


const TabInstalledComponent = () => {

    return (
        <>
            <TabInstalledHeader />
            <AppTableContainer dataCount={rows.length}>
                <MyContext.Consumer>
                    {(pageDetail) => {
                        const page = pageDetail.page;
                        const rowsPerPage = pageDetail.rowsPerPage;

                        return (
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {/*<PluginDetailsContainer actionButtons={['uninstall', 'details', 'configure', "activate"]} />*/}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        )
                    }}
                </MyContext.Consumer>
            </AppTableContainer>
        </>
    )
};

export default TabInstalledComponent;
