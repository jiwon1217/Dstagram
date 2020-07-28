import React, { useState } from 'react';
import {
	makeStyles,
	Grid,
	Paper,
	Box,
	Button,
	TextField,
} from '@material-ui/core';
import { Cancel, Done } from '@material-ui/icons';
import Header from '../section/Header';
import tempImage from '../tempImage.PNG';
import Api from '../../jamAPIs/JamAPIs';

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
	Cancel: {
		marginRight: 10,
	},
	Complete: {
		marginLeft: 10,
	},
}));

function PostUp(props) {
	const classes = useStyles();

	const [content, setContent] = useState({ content: '' });
	const [images, setImages] = useState({ images: [] });

	const handleImageChange = (evt) => {
		setImages([evt.target.value]);
	};

	const handleContentChange = (evt) => {
		setContent(evt.target.value);
	};

	const onClickComplete = (evt) => {
		evt.preventDefault();

		Api({
			method: 'POST',
			url: '/posts',
			header: {
				'Content-Type': 'multipart/form-data',
			},
			data: {
				content: content,
				images: images,
			},
		})
			.then((res) => {
				console.log('성공');
				props.history.goBack();
			})
			.catch((err) => {
				console.log('실패');
			});
	};

	const onClickCancel = () => {
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
								<input
									type='file'
									id='file'
									multiple
									onChange={handleImageChange}
								/>
							</Grid>
							<Grid item xs={'auto'}>
								<TextField
									fullWidth
									label='content'
									color='primary'
									multiline
									rows={3}
									variant='outlined'
									onChange={handleContentChange}
								/>
							</Grid>
							<Grid item>
								<Box>
									<Button
										className={classes.Cancel}
										variant='outlined'
										color='primary'
										size='small'
										startIcon={<Cancel />}
										onClick={onClickCancel}
									>
										취소
									</Button>
									<Button
										className={classes.Complete}
										variant='outlined'
										color='primary'
										size='small'
										startIcon={<Done />}
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
