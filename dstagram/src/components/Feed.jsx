import React from 'react';
import Header from './Header'
import Grid from "@material-ui/core/Grid";
import Posting from "./Posting";
import Footer from './Footer';

function Feed(props) {

    return (
        <div>
            <Grid>
                <Header />
                <Grid>
                    <Posting />
                </Grid>
                <Footer/>
            </Grid>
        </div>
    );
}

export default Feed;