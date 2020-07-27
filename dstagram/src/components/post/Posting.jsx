import React from 'react';
import {
	makeStyles,
	Grid,
	Box,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Avatar,
	IconButton,
	Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import tempImage from '../tempImage.PNG';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 600,
		marginTop: 20,
		marginBottom: 20,
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
}));

function Posting(props) {
	const classes = useStyles();

	return (
		<Grid>
			<Box display='flex' justifyContent='center' alignItems='center'>
				<Card className={classes.root}>
					<CardHeader
						avatar={
							<Avatar aria-label='recipe' className={classes.avatar}>
								R
							</Avatar>
						}
						action={
							<IconButton aria-label='settings'>
								<MoreVertIcon />
							</IconButton>
						}
						title='Shrimp and Chorizo Paella'
						subheader='September 14, 2016'
					/>
					<CardMedia
						className={classes.media}
						image={tempImage}
						title='Paella dish'
					/>
					<CardContent>
						<Typography variant='body2' color='textSecondary' component='p'>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests. Add 1 cup of frozen peas along
							with the mussels, if you like.
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Grid>
	);
}

export default Posting;
