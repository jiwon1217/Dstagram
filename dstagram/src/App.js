import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import {SignUp, Login, Header, Footer, Feed, Posting, Profile} from './components';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <Header/> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/posts" component={Feed} />
            <Route exact path="/users" component={SignUp} />
            <Route exact path="/user" component={Profile} />
            
      </BrowserRouter>
      
      {/* <Header/>  
      <SubHeader/> */}
      {/* <Login/> */}
      {/* <Login/>
      <SignUp/>
      <Feed/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;