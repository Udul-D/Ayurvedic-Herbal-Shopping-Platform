import { Container, Grid, Rating, Typography } from '@mui/material'
import React from 'react'

export default function DisplayRating({rating,description}) {
  return (
    <Container>
        <Grid >
         <Typography>Dilshan Lakindu</Typography> 
         <Rating value={rating} />
         <Typography variant='body1'>{description}</Typography>
         </Grid>
        
    </Container>
  )
}
