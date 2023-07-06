import React from 'react'
import Header from '../components/widgets/Header'

import { Container,Card,CardContent,TextField , Button ,Grid} from '@mui/material'


const DashBoard = () => {
  return (
    <>
    <Header/>
    <Container maxWidth="md">
      <Card variant="outlined" >
        <CardContent>
          <TextField label="Search" variant="outlined"></TextField>
          <Button variant="outlined">Add Note</Button>
        </CardContent>
      </Card>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

      </Grid>
    </Container>
    </>
  )
}

export default DashBoard