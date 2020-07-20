import React from 'react';
import Header from './Header'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Posting from "./Posting";

const useStyles = makeStyles(theme => ({
    home: {}
}));

function Feed(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid>
                <Header />
                <Grid>
                    <Posting />
                </Grid>
            </Grid>
        </div>
    );
}

export default Feed;