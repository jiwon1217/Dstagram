import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';
import Header from './Header';
import tempImage from './tempImage.PNG';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 5,
	},
	Paper: {
		height: 750,
		width: 800,
		margin: theme.spacing(2),
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.primary,
	},
	Image: {
		marginTop: 20,
		width: 450,
		height: 500,
	},
	Cancle: {
		marginRight: 10,
	},
	Complete: {
		marginLeft: 10,
	},
}));

function PostUp(props) {
	const classes = useStyles();

	const onClickCancel = () => {
		props.history.goBack();
	};

	const onClickComplete = () => {
		props.history.goBack();
	};

	return (
		<div>
			<Header />
			<Box className={classes.root} display='flex' justifyContent='center'>
				<Grid item xs={'auto'} display='flex'>
					<Paper className={classes.Paper} elevation={4}>
						<Grid container direction='column' alignItems='stretch' spacing={3}>
							<Grid item>
								<img
									className={classes.Image}
									src={tempImage}
									alt={'tempImage'}
								/>
							</Grid>
							<Grid item>
								<input type='file' />
							</Grid>
							<Grid item xs={'auto'}>
								<TextField
									fullWidth
									label='content'
									color='primary'
									multiline
									rows={3}
									variant='outlined'
								/>
							</Grid>
							<Grid item>
								<Box>
									<Button
										className={classes.Cancle}
										variant='outlined'
										color='primary'
										size='small'
										startIcon={<CancelIcon />}
										onClick={onClickCancel}
									>
										취소
									</Button>
									<Button
										className={classes.Complete}
										variant='outlined'
										color='primary'
										size='small'
										startIcon={<DoneIcon />}
										onClick={onClickComplete}
									>
										완료
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Box>
		</div>
	);
}

export default PostUp;
