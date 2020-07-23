import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';

function DeletePost(props) {
    const { open, handleClose } = props;

    return (
        <Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"삭제하시겠습니까?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" startIcon={<CancelIcon/>}>
                        취소
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus startIcon={<DoneIcon/>}> 
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default DeletePost;