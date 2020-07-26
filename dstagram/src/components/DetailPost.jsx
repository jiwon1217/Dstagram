import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';
import DeletePost from './DeletePost';
import tempImage from './tempImage.PNG';

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
						) : (
							<Box>
								<Button
									className={classes.Update}
									variant='outlined'
									color='primary'
									size='small'
									startIcon={<UpdateIcon />}
									onClick={onClickUpdate}
								>
									수정
								</Button>
								<Button
									className={classes.Delete}
									variant='outlined'
									color='primary'
									size='small'
									startIcon={<DeleteIcon />}
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
