import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from "@material-ui/core/Fab";
import PersonIcon from "@material-ui/icons/Person";

import logo from './dstagramLogo.PNG';

const useStyles = makeStyles(theme => ({
    profile: {
        marginRight: 200,
        float: 'right'
    },
    media: {
        marginLeft: 200,
        width: 100
    }
}));

function Header(props) {
    const classes = useStyles();

    const navbarStyle = {
        backgroundColor: 'white',
        height: 80
    }
    const logoStyle = {
        marginLeft: 200,
        width: 100
    }
    const headerStyle = {
        backgroundColor: 'white',
        padding: 20,
        borderBottom: '1px solid lightgray',
        objectFit: 'contain',
    }
    return (
        <div className="navbar" style={navbarStyle}>
            <div className="header" style={headerStyle}>
                <img src={logo} alt='logo' className="logo" style={logoStyle}></img>
                {/* <CardMedia className={classes.media} component="img" image ={logo} title="logo"></CardMedia> */}
                <Fab size="small" color="primary" className={classes.profile}>
                    <PersonIcon />
                </Fab>
            </div>
        </div>
    );
}

export default Header;