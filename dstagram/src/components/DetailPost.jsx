import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  media: {
    width: 450,
    height: 500
  }
});

function DetailPost(props) {
  const classes = useStyles();
  const { Detail, setDetail } = props;

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={Detail}
      onClose={() => setDetail(false)}
    >
      <DialogContent>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item>
            <img
              className={classes.media}
              src={"https://material-ui.com/static/images/grid-list/star.jpg"}
              alt={"tempImage"}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="content"
              color="primary"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default DetailPost;