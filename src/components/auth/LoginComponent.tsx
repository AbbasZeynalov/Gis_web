import React, {BaseSyntheticEvent, MouseEvent, useState} from "react";
import { useHistory } from "react-router";

// Material imports
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

// Custom imports
import {Login} from "../../actions/AuthAction";
import {IMainReduxState} from "../../models/redux/ReduxModel";
import {CheckFormValid} from "../../utils/validation/CheckFormValid";
import {AuthAsset} from "../../assets/material/AuthAsset";
import {useCustomDispatch, useCustomHistory, useCustomSelector} from "../../utils/helpers/ReactReduxHooks";

const errMessage: { [index: string]: string } = {
    username: 'İstifadəçi adını daxil edin',
    password: 'Şifrəni daxil edin',
};

const formInputs = ['username', 'password'];

const LoginComponent = () => {
    const classes = AuthAsset();
    const history = useCustomHistory();
    const dispatch = useCustomDispatch();
    const { auth } = useCustomSelector((state: IMainReduxState) => ({ auth: state.Auth }));

    const [inputs, setInputs] = useState({
        username: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        }
    });

    const onChange = (event: BaseSyntheticEvent) => {
        event.persist();
        const input = event.target.name;
        const value = event.target.value;

        setInputs(inputs => ({
            ...inputs,
            [input]: {
                value: value || '',
                error: value ? '' : errMessage[input]
            }
        }));
    };

    const onSubmit = async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = CheckFormValid(e, formInputs, errMessage);

        if (isValid === true) {
            const loginForm = {
                username: inputs.username.value,
                password: inputs.password.value
            };

            await dispatch(Login(loginForm)).then(() => history.push('/'));
        } else {
            setInputs(inputs => ({...inputs, ...isValid}))
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            {/*<SnackbarComponent />*/}
            <CssBaseline />
            <div className={classes.paper} data-testid='loginBox'>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    noValidate
                    data-testid='loginForm'
                    onSubmit={ onSubmit }
                    className={classes.form}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="User Name"
                        name="username"
                        autoComplete="email"
                        autoFocus
                        error={!!inputs.username.error}
                        helperText={inputs.username.error}
                        inputProps={{ "data-testid": "username" }}
                        value={inputs.username.value}
                        onChange={onChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={!!inputs.password.error}
                        helperText={inputs.password.error}
                        value={inputs.password.value}
                        inputProps={{ "data-testid": "password" }}
                        onChange={onChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        fullWidth
                        type='submit'
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        data-testid={'submit'}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default LoginComponent;
