import React, { useState } from 'react';
import {
	makeStyles,
	Grid,
	Box,
	Button,
	Dialog,
	DialogContent,
	TextField,
} from '@material-ui/core';
import { Update, Delete, Cancel, Done } from '@material-ui/icons';
import DeletePost from './DeletePost';
import tempImage from '../tempImage.PNG';

const useStyles = makeStyles({
	Image: {
		width: 450,
		height: 500,
	},
	Update: {
		marginRight: 10,
	},
	Delete: {
		marginLeft: 10,
	},
	Cancle: {
		marginRight: 10,
	},
	Complete: {
		marginLeft: 10,
	},
});

function DetailPost(props) {
	const classes = useStyles();
	const { Detail, setDetail } = props;

	const [isUpdate, setIsUpdate] = useState(false);
	const [isDelete, setIsDelete] = useState(false);

	const onClickUpdate = () => {
		setIsUpdate(true);
	};

	const onClickDelete = () => {
		setIsDelete(true);
	};

	const onClickCancel = () => {
		setIsUpdate(false);
	};

	const onClickComplete = () => {
		setIsUpdate(false);
	};

	return (
		<Dialog
			fullWidth
			maxWidth='sm'
			open={Detail}
			onClose={() => setDetail(false)}
		>
			<DialogContent>
				<Grid container justify='center' alignItems='stretch' spacing={3}>
					<Grid item>
						<img className={classes.Image} src={tempImage} alt={'tempImage'} />
					</Grid>
					<Grid item xs={10}>
						<TextField
							fullWidth
							label='content'
							color='primary'
							multiline
							rows={3}
							variant='outlined'
							disabled={!isUpdate}
						/>
					</Grid>
					<Grid item>
						{isUpdate ? (
							<Box>
								<Button
									className={classes.Cancle}
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
						) : (
							<Box>
								<Button
									className={classes.Update}
									variant='outlined'
									color='primary'
									size='small'
									startIcon={<Update />}
									onClick={onClickUpdate}
								>
									수정
								</Button>
								<Button
									className={classes.Delete}
									variant='outlined'
									color='primary'
									size='small'
									startIcon={<Delete />}
									onClick={onClickDelete}
								>
									삭제
								</Button>
							</Box>
						)}
					</Grid>
					<DeletePost open={isDelete} handleClose={() => setIsDelete(false)} />
				</Grid>
			</DialogContent>
		</Dialog>
	);
}

export default DetailPost;
