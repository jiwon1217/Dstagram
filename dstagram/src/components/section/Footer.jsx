import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, Grid, Fab } from '@material-ui/core';
import { Add, Home, Person } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 10,
	},
	Home: {
		marginLeft: 450,
		marginRight: 110,
	},
	Add: {
		marginLeft: 110,
		marginRight: 110,
	},
	Person: {
		marginLeft: 110,
		marginRight: 450,
	},
}));

function Footer(props) {
	const classes = useStyles();
	const email = window.localStorage.getItem('email');

	const onClickHome = () => {
		props.history.push('/posts');
	};

	const onClickPostUp = () => {
		props.history.push('/post');
	};

	const onClickProfile = () => {
		props.history.push(`/users/${email}`);
	};

	return (
		<Grid item xs={'auto'} className={classes.root}>
			<Fab color='primary' className={classes.Home} onClick={onClickHome}>
				<Home />
			</Fab>
			<Fab color='primary' className={classes.Add} onClick={onClickPostUp}>
				<Add />
			</Fab>
			<Fab color='primary' className={classes.Person} onClick={onClickProfile}>
				<Person />
			</Fab>
		</Grid>
	);
}

export default withRouter(Footer);
