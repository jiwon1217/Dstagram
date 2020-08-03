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

	signUpButton: {
		width: 300,
		background: '#1E90FF',
	},
}));

function SignUp(props) {
	const classes = useStyles();

	const [userValues, setUserValues] = useState({
		email: '',
		name: '',
		nickname: '',
		password: '',
	});

	const handleUserValues = (key) => (evt) => {
		setUserValues({ ...userValues, [key]: evt.target.value });
	};

	const onClickSignUp = (e) => {
		e.preventDefault();

		Api({
			method: 'POST',
			url: '/users',
			header: {
				'Content-Type': 'multipart/form-data',
			},
			data: userValues,
		})
			.then((res) => {
				console.log('성공');
				props.history.replace('/login');
			})
			.catch((err) => {
				console.log('실패');
			});
	};

	return (
		<Box className={classes.root} display='flex'>
			<Grid item xs={'auto'} display='flex'>
				<Paper className={classes.paper} elevation={4}>
					<Grid container direction='column' alignItems='center' spacing={2}>
						<img src={logo} alt='logo' className='center' width='200'></img>
						<Grid item>
							<TextField
								className={classes.rowfield}
								color='primary'
								label='휴대폰 번호 또는 이메일 주소'
								variant='filled'
								value={userValues.email}
								onChange={handleUserValues('email')}
							/>
						</Grid>
						<Grid item>
							<TextField
								className={classes.rowfield}
								color='primary'
								label='성명'
								variant='filled'
								value={userValues.name}
								onChange={handleUserValues('name')}
							/>
						</Grid>
						<Grid item>
							<TextField
								className={classes.rowfield}
								color='primary'
								label='사용자 이름'
								variant='filled'
								value={userValues.nickname}
								onChange={handleUserValues('nickname')}
							/>
						</Grid>
						<Grid item>
							<TextField
								className={classes.rowfield}
								color='primary'
								label='비밀번호'
								type='password'
								variant='filled'
								value={userValues.password}
								onChange={handleUserValues('password')}
							/>
						</Grid>
						<Grid item>
							<Button
								className={classes.signUpButton}
								variant='contained'
								color='primary'
								onClick={onClickSignUp}
							>
								가입
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Box>
	);
}
export default SignUp;
