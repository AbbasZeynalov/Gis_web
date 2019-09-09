import React from "react";

// Material imports
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Custom imports
import AppTableContainer, {MyContext} from "../../../../common/tables/AppTableContainer";

function createData(name: string, calories: number, fat: number) {
    return { name, calories, fat };
}

const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));


const TabUpdateComponent = React.memo(() => {

    return (
       <>
           <Grid container spacing={2}>
               <Grid item xs={10}>
                   <span>The following updates are available</span>
               </Grid>
               <Grid item xs={2}>
                   <Button size="medium" variant="outlined" color='primary' style={{float: 'right'}}>
                       Isntall all
                   </Button>
               </Grid>
           </Grid>
           <AppTableContainer dataCount={rows.length}>
               <MyContext.Consumer>
                   {(pageDetail) => {
                       let page = pageDetail.page;
                       let rowsPerPage = pageDetail.rowsPerPage;

                       return (
                           <TableBody>
                               {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => (
                                   <TableRow key={index}>
                                       <TableCell component="th" scope="row">
                                           {row.name}
                                       </TableCell>
                                       <TableCell align="right">{row.calories}</TableCell>
                                       <TableCell align="right">{row.fat}</TableCell>
                                   </TableRow>
                               ))}
                           </TableBody>
                       )
                   }
                   }
               </MyContext.Consumer>
           </AppTableContainer>
       </>
    )
});

export default TabUpdateComponent;
