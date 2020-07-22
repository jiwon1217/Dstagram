import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 10
    },
    Home: {
        marginLeft: 450,
        marginRight: 110
    },
    Add: {
        marginLeft: 110,
        marginRight: 110
    },
    Person: {
        marginLeft: 110,
        marginRight: 450
    }
}));

function Footer(props) {

    const classes = useStyles();

    return (
        <Grid item className={classes.root}>
            <Fab color="primary" className={classes.Home}>
                <HomeIcon />
            </Fab>
            <Fab color="primary" className={classes.Add}>
                <AddIcon />
            </Fab>
            <Fab color="primary" className={classes.Person}>
                <PersonIcon />
            </Fab>
        </Grid>
    );
}

export default Footer;