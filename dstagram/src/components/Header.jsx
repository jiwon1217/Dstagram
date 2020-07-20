import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from "@material-ui/core/Fab";
import PersonIcon from "@material-ui/icons/Person";
import logo from './dstagramLogo.PNG';
import './Header.css';

const useStyles = makeStyles(theme => ({
    profile: {
        position: 'relrative',
        marginRight: 200,
        float: 'right'
    }
}));

function Header(props) {
    const classes = useStyles();
    const logoStyle = {
        fontSize: 30
    }
    return (
        <div className="navbar">
            <div className="header">
                <img src={logo} alt='logo' className="logo" width="100"></img>
                {/* <span className="header-logo" style={logoStyle}>Dstagram</span> */}
                <Fab size="small" color="disabled" className={classes.profile}>
                    <PersonIcon />
                </Fab>
            </div>
        </div>
    );
}

export default Header;