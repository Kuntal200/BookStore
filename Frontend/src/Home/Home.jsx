import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import FreeBook from '../Components/FreeBook'
import Footer from '../Components/Footer'

function Home({user,setUser}) {
  return (
    <>
    <Navbar user={user} setUser={setUser}/>
   <Banner/>
   <FreeBook/>
   <Footer/>
    </>
  )
}

export default Home
