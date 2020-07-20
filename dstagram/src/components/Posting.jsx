import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        marginTop: 20,
        marginBottom:20
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

function Posting(props) {
    const classes = useStyles();

    return (
        <Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
            <Card className={classes.root}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </CardContent>
            </Card>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
            <Card className={classes.root}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </CardContent>
            </Card>
        </Box>
</Grid>

        
    );
}

export default Posting;