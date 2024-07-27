import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Page1 from './Page1'
import '../../../public/styles.css';
import Page2 from './Page2';
import Page3 from './Page3';

const Home = () => {
  return (
    <div>
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  )
}

export default Home
