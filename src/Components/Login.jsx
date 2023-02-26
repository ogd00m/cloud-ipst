import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";

const Login = () => {
    const [login, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);


    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj = {
                "login": login,
                "password": password
            };
            fetch("http://91.193.183.139:7000/auth/login", {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                } else {
                    toast.success('Success');
                    sessionStorage.setItem('login', login);
                    sessionStorage.setItem('token', resp.token);
                    usenavigate('/')
                }
                // if (Object.keys(resp).length === 0) {
                //     toast.error('Please Enter valid username');
                // } else {
                //     if (resp.password === password) {
                //         toast.success('Success');
                //         sessionStorage.setItem('username',username);
                //         usenavigate('/')
                //     }else{
                //         toast.error('Please Enter valid credentials');
                //     }
                // }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (login === '' || login === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    const theme = createTheme();

    return (


        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={ProceedLoginusingAPI} noValidate sx={{mt: 1}}>

                        <Typography component="h1" variant="h5">
                            Вход
                        </Typography>
                        <Box component="form" noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="login"
                                label="Логин"
                                name="login"
                                autoComplete="login"
                                autoFocus
                                value={login}
                                onChange={e => usernameupdate(e.target.value)}
                            />
                        </Box>
                        {/*<label>User Name <span className="errmsg">*</span></label>*/}
                        {/*<input value={login} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>*/}


                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => passwordupdate(e.target.value)}
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Войти
                        </Button>

                        <Grid container>
                            <Grid item>
                                <Link to={'/register'} variant="body2">
                                    {"Ещё нет аккаунта? Зарегистрируйтесь"}
                                </Link>
                            </Grid>
                        </Grid>



                    </Box>

                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;