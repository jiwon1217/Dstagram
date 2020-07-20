import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import logo from './dstagramLogo.PNG';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 15
    },
    paper: {
        height: 800,
        width: 350,
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.primary
    },
    rowfield: {
        width: 300
    },

    Button: {
        width: 300,
        background: '#1E90FF'

    }
}));

function Login(props) {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.root} display="flex" justifyContent="center">
                <Grid item xs={"auto"} display="flex" justifyContent="center">
                    <Paper className={classes.paper} elevation={4}>
                        <Grid container direction="column" alignItems="center" spacing={2}>
                            <img src={logo} alt='logo' className="center" width="200"></img>
                            <Grid item>
                                <TextField
                                    className={classes.rowfield}
                                    color="primary"
                                    label="전화번호, 사용자 이름 또는 이메일"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    className={classes.rowfield}
                                    color="primary"
                                    label="비밀번호"
                                    type="password"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    className={classes.Button}
                                    variant="contained"
                                    color="primary"
                                >
                                    로그인
                            </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    className={classes.Button}
                                    variant="contained"
                                    color="primary"
                                >
                                    가입하기
                            </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Box>
        </div>
    );
}

export default Login;