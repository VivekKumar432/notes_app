import React from 'react'
import Header from '../components/widgets/Header'
import Login from './Login'

import { Container } from '@mui/material'


const Home = () => {
  return (
    <>
    <Container maxWidth="md">
       <Login/>
    </Container>
    </>
  )
}

export default Home