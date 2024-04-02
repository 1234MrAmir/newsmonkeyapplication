
import './App.css';

import React, { Component } from 'react'
import Navbar from './Componants/Navbar';
import News from './Componants/News';
import Footer from './Componants/Footer';
// import Newsitem from './Componants/Newsitem';

export default class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>       
       <News pageSize={6} country='in' category ='general'/>
       <Footer/>
      </div>
    )
  }
}

