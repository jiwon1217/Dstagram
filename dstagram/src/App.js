import React from 'react';
import './App.css';

import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
import Posting from './components/Posting';

function App() {

  return (
    <div className="App">
      

      <Header/>  
      <Login/>
      {/* <Login/>
      <SignUp/>
      <Feed/> */}
      <Footer/>
    </div>
  );
}

export default App;