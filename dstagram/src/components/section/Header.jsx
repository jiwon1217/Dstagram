import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, Fab, Menu, MenuItem } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import logo from '../dstagramLogo.PNG';

const useStyles = makeStyles((theme) => ({
	profile: {
		marginRight: 200,
		float: 'right',
	},
	media: {
		marginLeft: 200,
		width: 100,
	},
}));

function Header(props) {
	const classes = useStyles();
	const email = window.localStorage.getItem('email');

	const navbarStyle = {
		backgroundColor: 'white',
		height: 80,
	};
	const logoStyle = {
		marginLeft: 200,
		width: 100,
	};
	const headerStyle = {
		backgroundColor: 'white',
		padding: 20,
		borderBottom: '1px solid lightgray',
		objectFit: 'contain',
	};

	const onClickLogo = () => {
		props.history.push('/posts');
	};

	const onClickProfile = () => {
		props.history.push(`/users/${email}`);
	};

	const onClickPostUp = () => {
		props.history.push('/post');
	};

	const onClickLogout = () => {
		window.localStorage.removeItem('accessToken');
		window.localStorage.removeItem('email');
		props.history.replace('/login');
	};
	return (
		<div className='navbar' style={navbarStyle}>
			<div className='header' style={headerStyle}>
				<img
					src={logo}
					alt='logo'
					className='logo'
					style={logoStyle}
					onClick={onClickLogo}
				></img>
				<PopupState variant='popover' popupId='demo-popup-menu'>
					{(popupState) => (
						<React.Fragment>
							<Fab
								size='small'
								color='primary'
								className={classes.profile}
								variant='round'
								{...bindTrigger(popupState)}
							>
								<PersonIcon />
							</Fab>
							<Menu {...bindMenu(popupState)}>
								<MenuItem onClick={onClickProfile}>프로필</MenuItem>
								<MenuItem onClick={onClickPostUp}>글쓰기</MenuItem>
								<MenuItem onClick={onClickLogout}>로그아웃</MenuItem>
							</Menu>
						</React.Fragment>
					)}
				</PopupState>
			</div>
		</div>
	);
}

export default withRouter(Header);
