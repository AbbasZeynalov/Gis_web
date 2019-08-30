import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';

//custom imports
import App from "./App";
import "./assets/css/style.css";
import store from './store';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000',
        },
    },
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={5}>
                    <App />
                </SnackbarProvider>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
)
