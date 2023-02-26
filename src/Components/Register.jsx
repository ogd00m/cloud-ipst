import {useState} from "react";
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

const Register = () => {

    const [login, loginchange] = useState("");
    const [password, passwordchange] = useState("");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;

        if (login === null || login === '') {
            isproceed = false;

        }
        if (password === null || password === '') {
            isproceed = false;

        }

        return isproceed;
    }

        const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = {login, password,};
            if (IsValidate()) {
                //console.log(regobj);
                fetch("http://91.193.183.139:7000/auth/register", {
                    method: "POST",
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(regobj)
                }).then((res) => {
                    toast.success('Registered successfully.')
                    navigate('/login');
                }).catch((err) => {
                    toast.error('Failed :' + err.message);
                });
            }
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
                        <Box component="form" onSubmit={handlesubmit} noValidate sx={{mt: 1}}>

                            <Typography component="h1" variant="h5">
                                Регистрация
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
                                    onChange={e => loginchange(e.target.value)}
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
                                onChange={e => passwordchange(e.target.value)}
                            />


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Зарегистрироваться
                            </Button>

                            <Grid container>
                                <Grid item>
                                    <Link to={'/login'} variant="body2">
                                        {"Уже есть аккаунт? Войдите"}
                                    </Link>
                                </Grid>
                            </Grid>



                        </Box>

                    </Box>
                </Container>
            </ThemeProvider>



        );
}
    export default Register;