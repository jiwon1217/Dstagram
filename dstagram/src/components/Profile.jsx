import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import ExposureZeroSharpIcon from '@material-ui/icons/ExposureZeroSharp';
import tempImage from './tempImage.PNG';
import Footer from "./Footer";
import Header from "./Header";
import DetailPost from "./DetailPost";
const tileData = [
    {
        id:1,
        title: "Image1",
        author: "author",
        cols: 1,
    },
    {
        id:2,
        title: "Image2",
        author: "author",
        cols: 2,
    },
    {
        id:3,
        title: "Image3",
        author: "author",
        cols: 3,
    },
    {
        id:4,
        title: "Image4",
        author: "author",
        cols: 1,
    },
    {
        id:5,
        title: "Image5",
        author: "author",
        cols: 1,
    },
    {
        id:6,
        title: "Image6",
        author: "author",
        cols: 1,
    },
    {
        id:7,
        title: "Image7",
        author: "author",
        cols: 2,
    },
    {
        id:8,
        title: "Image8",
        author: "author",
        cols: 1,
    },
    {
        id:9,
        title: "Image9",
        author: "author",
        cols: 2,
    },
    {
        id:10,
        title: "Image10",
        author: "author",
        cols: 1,
    },
    {
        id:11,
        title: "Image11",
        author: "author",
        cols: 1,
    },
    {
        id:12,
        title: "Image12",
        author: "author",
        cols: 1,
    },
    {
        id:13,
        title: "Image13",
        author: "author",
        cols: 1,
    }
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
        overflow: 'auto',
    }
}));

function Profile() {
    const classes = useStyles();

    const [Detail, setDetail] = useState(false);

    const onClickImage = () => {
        setDetail(true);
    };

    return (
        <div>
            <Header />
            <Box display="flex" p={1} bgcolor="background.paper" justifyContent="center" marginTop={1}>
                <Box p={2} flexShrink={1} bgcolor="grey.300" justifyContent="center">
                    <Avatar>U</Avatar>
                    <Typography color="primary" component="p">
                        닉네임
                    </Typography>
                </Box>
                <Box p={1} flexShrink={1} bgcolor="grey.300" height="50%" justifyContent="center" marginLeft={10}>
                    <ExposureZeroSharpIcon />
                    <Typography color="primary" component="p">
                        게시물
                    </Typography>
                </Box>
            </Box>
            <div className={classes.root}>
                <GridList cellHeight={130} className={classes.gridList} cols={3}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.id} cols={tile.cols || 1}>
                            <img src={tempImage}
                                alt={tile.title}
                                onClick={onClickImage}
                            />
                        </GridListTile>
                    ))}
                    <DetailPost Detail={Detail} setDetail={setDetail} />
                </GridList>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;