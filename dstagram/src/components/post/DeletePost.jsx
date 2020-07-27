import React from 'react';
import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
} from '@material-ui/core';
import { Cancel, Done } from '@material-ui/icons';

function DeletePost(props) {
	const { open, handleClose } = props;

	return (
		<Box>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'삭제하시겠습니까?'}</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} color='primary' startIcon={<Cancel />}>
						취소
					</Button>
					<Button
						onClick={handleClose}
						color='primary'
						autoFocus
						startIcon={<Done />}
					>
						확인
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}

export default DeletePost;
