import React from "react";

// Material imports
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from '@material-ui/core/TableBody';

// Custom imports
import AppTableContainer, {MyContext} from "../../../../common/tables/AppTableContainer";
import TabUpdateHeader from "../update/TabUpdateHeader";
import PluginDetailsContainer from "../../plugin-details/PluginDetailsContainer";
import TabSearchHeader from "./TabSearchHeader";
import {IPluginItem, ITabSearchComponentProps} from "../../../../../models/admin/AdminPluginsModel";

const TabSearchComponent = (props: ITabSearchComponentProps) => {
    const {SyncPlugins, plugins} = props;

    return (
        <>
            <TabSearchHeader
                SyncPlugins={SyncPlugins}
            />

            <AppTableContainer dataCount={plugins.totalCount}>
                <MyContext.Consumer>
                    {(pageDetail) => {
                        const page = pageDetail.page;
                        const rowsPerPage = pageDetail.rowsPerPage;

                        return (
                            <TableBody>
                                {plugins.items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((plugin: IPluginItem, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            <PluginDetailsContainer
                                                actionButtons={['install', 'details']}
                                                plugin={plugin}
                                            />
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

export default TabSearchComponent;
