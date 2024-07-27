import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import NavbarTrainer from '../NavbarTrainer'
import ListOfUsers from './ListOfUsers'
import ListOfInchargeProgram from './ListOfInchargeProgram'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <NavbarTrainer />
      <ListOfInchargeProgram />
      {/* <ListOfUsers /> */}
      <Footer />
    </div>
  )
}

export default Dashboard
