import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import Header from "./Header";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Grid, Box, Avatar } from "@material-ui/core";
import ExposureZeroSharpIcon from '@material-ui/icons/ExposureZeroSharp';

const tileData = [
    {
        // img: image,
        title: "Image",
        author: "author",
        cols: 1,
    },
    {
        title: "Image",
        author: "author",
        cols: 2,
    },
    {
        title: "Image",
        author: "author",
        cols: 4,
    },
    {
        title: "Image",
        author: "author",
        cols: 1,
    },
    {
        title: "Image",
        author: "author",
        cols: 1,
    },
    {
        title: "Image",
        author: "author",
        cols: 1,
    },
    {
        title: "Image",
        author: "author",
        cols: 2,
    },
    {
        title: "Image",
        author: "author",
        cols: 1,
    },
    {
        title: "Image",
        author: "author",
        cols: 2,
    },
    {
        title: "Image",
        author: "author",
        cols: 1,
    },
    {
        title: "Image",
        author: "author",
        cols: 1,
    },
    {
        title: "Image",
        author: "author",
        cols: 1,
    },
    // {
    //   [etc...]
    // },
];

const useStyles = makeStyles(theme => ({
    userInfo: {},
    root: {
        marginRight: 15,
        marginTop: 5,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 550,
        height: 630,
    }
}));

function Profile() {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Box display="flex" p={1} bgcolor="background.paper" justifyContent="center" marginTop={1}>
                <Box p={2} flexShrink={1} bgcolor="grey.300" justifyContent="center">
                    <Avatar>U</Avatar>
                    userNickname
                </Box>
                <Box p={1} flexShrink={1} bgcolor="grey.300" justifyContent="center" marginLeft={10}>
                <ExposureZeroSharpIcon/>
                    게시물
                </Box>
            </Box>
            <div className={classes.root}>
                <GridList cellHeight={130} className={classes.gridList} cols={3}>
                    {tileData.map((tile) => (
                        <GridListTile cols={tile.cols || 1}>
                            <img src={"https://material-ui.com/static/images/grid-list/star.jpg"}
                                alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;