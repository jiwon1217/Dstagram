import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
	makeStyles,
	Typography,
	GridList,
	GridListTile,
	Box,
	Avatar,
} from '@material-ui/core';
import ExposureZeroSharpIcon from '@material-ui/icons/ExposureZeroSharp';
import Header from '../section/Header';
import Footer from '../section/Footer';
import DetailPost from '../post/DetailPost';
import tempImage from '../tempImage.PNG';
import Api from '../../jamAPIs/JamAPIs';

const tileData = [
	{
		id: 1,
		title: 'Image1',
		author: 'author',
		cols: 1,
	},
	{
		id: 2,
		title: 'Image2',
		author: 'author',
		cols: 2,
	},
	{
		id: 3,
		title: 'Image3',
		author: 'author',
		cols: 3,
	},
	{
		id: 4,
		title: 'Image4',
		author: 'author',
		cols: 1,
	},
	{
		id: 5,
		title: 'Image5',
		author: 'author',
		cols: 1,
	},
	{
		id: 6,
		title: 'Image6',
		author: 'author',
		cols: 1,
	},
	{
		id: 7,
		title: 'Image7',
		author: 'author',
		cols: 2,
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		marginRight: 15,
		marginTop: 5,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 550,
		height: 630,
		overflow: 'auto',
	},
}));

function Profile(props) {
	const classes = useStyles();

	const [Detail, setDetail] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const email = window.localStorage.getItem('email');

	const onClickImage = () => {
		setDetail(true);
	};

	useEffect(() => {
		Api.get(`/users/${email}`)
			.then((res) => {
				setUserInfo(res.data.nickname);
				console.log('성공');
			})
			.catch((err) => {
				console.log('실패');
			});
	});

	return (
		<div>
			<Header />
			<Box
				display='flex'
				p={1}
				bgcolor='background.paper'
				justifyContent='center'
				marginTop={1}
			>
				<Box p={2} flexShrink={1} bgcolor='grey.300' justifyContent='center'>
					<Avatar>U</Avatar>
					<Typography color='primary' component='p'>
						{userInfo}
					</Typography>
				</Box>
				<Box
					p={1}
					flexShrink={1}
					bgcolor='grey.300'
					height='50%'
					justifyContent='center'
					marginLeft={10}
				>
					<ExposureZeroSharpIcon />
					<Typography color='primary' component='p'>
						게시물
					</Typography>
				</Box>
			</Box>
			<div className={classes.root}>
				<GridList cellHeight={130} className={classes.gridList} cols={3}>
					{tileData.map((tile) => (
						<GridListTile key={tile.id} cols={tile.cols || 1}>
							<img src={tempImage} alt={tile.title} onClick={onClickImage} />
						</GridListTile>
					))}
					<DetailPost Detail={Detail} setDetail={setDetail} />
				</GridList>
			</div>
			<Footer />
		</div>
	);
}

export default withRouter(Profile);
