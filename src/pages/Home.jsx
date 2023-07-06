import React from 'react'
import Header from '../components/widgets/Header'
import Login from '../components/widgets/Login'

import { Container } from '@mui/material'


const Home = () => {
  return (
    <>
    <Header/>
    <Container maxWidth="md">
       <Login/>
    </Container>
    </>
  )
}

export default Home