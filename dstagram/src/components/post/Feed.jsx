import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../section/Header';
import Posting from './Posting';
import Footer from '../section/Footer';

function Feed(props) {
	return (
		<div>
			<Grid>
				<Header />
				<Grid>
					<Posting />
				</Grid>
				<Footer />
			</Grid>
		</div>
	);
}

export default Feed;
