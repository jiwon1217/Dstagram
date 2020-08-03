import React, { useState } from 'react';
import {
	makeStyles,
	Grid,
	TextField,
	Button,
	Box,
	Paper,
} from '@material-ui/core';
import logo from '../dstagramLogo.PNG';
import Api from '../../jamAPIs/JamAPIs';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 15,
		justifyContent: 'center',
	},
	paper: {
		height: 800,
		width: 350,
		margin: theme.spacing(2),
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.primary,
	},
	rowfield: {
		width: 300,
	},

	Button: {
		width: 300,
		background: '#1E90FF',
	},
}));

function Login(props) {
	const classes = useStyles();
	const [user, setUser] = useState({ email: '', password: '' });

	const handleTextFieldChange = (key) => (evt) => {
		setUser({
			...user,
			[key]: evt.target.value,
		});
	};

	const onClickLogin = () => {
		Api({
			method: 'POST',
			url: '/login',
			data: user,
		})
			.then((res) => {
				console.log(res.data);
				login(res.data);
				console.log('성공');
			})
			.catch((err) => {
				console.log('실패');
			});
	};

	const login = (data) => {
		window.localStorage.setItem('accessToken', data.token);
		window.localStorage.setItem('email', data.email);
		props.history.push('/posts');
	};

	const onClickSignUp = () => {
		props.history.push('/users');
	};

	return (
		<div>
			<Box className={classes.root} display='flex'>
				<Grid item xs={'auto'} display='flex'>
					<Paper className={classes.paper} elevation={4}>
						<Grid container direction='column' alignItems='center' spacing={2}>
							<img src={logo} alt='logo' className='center' width='200'></img>
							<Grid item>
								<TextField
									className={classes.rowfield}
									color='primary'
									label='이메일'
									variant='filled'
									id='email'
									value={user.email}
									onChange={handleTextFieldChange('email')}
								/>
							</Grid>
							<Grid item>
								<TextField
									className={classes.rowfield}
									color='primary'
									label='비밀번호'
									type='password'
									variant='filled'
									id='password'
									value={user.password}
									onChange={handleTextFieldChange('password')}
								/>
							</Grid>
							<Grid item>
								<Button
									className={classes.Button}
									variant='contained'
									color='primary'
									onClick={onClickLogin}
								>
									로그인
								</Button>
							</Grid>
							<Grid item>
								<Button
									className={classes.Button}
									variant='contained'
									color='primary'
									onClick={onClickSignUp}
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
