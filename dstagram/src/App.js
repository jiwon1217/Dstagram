import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { SignUp, Login, Feed, PostUp, Profile } from './components';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/users' component={SignUp} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/posts' component={Feed} />
				<Route exact path='/post' component={PostUp} />
				<Route exact path='/user' component={Profile} />
			</BrowserRouter>
		</div>
	);
}

export default App;
