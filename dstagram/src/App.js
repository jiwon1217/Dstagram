import React from 'react';
import './App.css';
import {SignUp, Login, Header, Footer, Feed, Posting} from './components';

function App() {

  return (
    <div className="App">
      
      <Header/>
      {/* <Header/>  
      <SubHeader/> */}
      <Login/>
      {/* <Login/>
      <SignUp/>
      <Feed/> */}
      <Footer/>
    </div>
  );
}

export default App;