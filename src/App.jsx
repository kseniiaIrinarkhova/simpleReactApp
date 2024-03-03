import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  
  return (
    <>
     <Header />
      <Content color="darkblue" text="This is my first React Application!" />
      <Content color="darkred" text="Wish me luck..." />
      <Content color="darkcyan" text="I think I've got it!" />
     <Footer/>
    </>
  )
}

export default App
