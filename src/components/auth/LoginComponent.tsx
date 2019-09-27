import React, {BaseSyntheticEvent, MouseEvent} from 'react';

// Material imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Custom imports
import {AuthAsset} from "../../assets/material/AuthAsset";
import {ILoginComponentProps} from "../../models/AuthModel";

const LoginComponent = React.memo((props: ILoginComponentProps) => {
    const classes = AuthAsset();  // assign auth styles to classes

    const {username, password, onChange, onSubmit} = props;

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
                    onSubmit={(e: MouseEvent<HTMLFormElement>) => onSubmit(e)}
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
                        error={!!username.error}
                        helperText={username.error}
                        inputProps={{ "data-testid": "username" }}
                        value={username.value}
                        onChange={onChange}
                    />
                    {/*<div data-testid='form-error'>{errors.username}</div>*/}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={!!password.error}
                        helperText={password.error}
                        value={password.value}
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
                        Sign Inn
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
});

export default LoginComponent;
