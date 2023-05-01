import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Rating, Typography,Button } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
// import {  } from 'bootstrap';

export default function ProductReview() {
    const [review, setReview] = React.useState({
        rating: 0,
        description: "",
      });

    const onClickAdd = async (e) => {
        e.preventDefault();
        console.log(review);
        if (
          review.name === "" ||
          review.price === "" 
        
        ) {
          alert("Fill all the fields");
        } else {
          try {
            const res = await axios.post(
              "http://localhost:5005/api/review/create",
              review
            );
            console.log(res);
            toast.success(res.data.message);
          } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
          }
        }
      };
  return (
    <Box
      sx={{
        width:'50%',
        mt:'40px'
,        display: 'flex',
         justifyContent: 'left',
         flexDirection:'column',
        alignItems: 'left',
        '& > :not(style)': { m: 1 },
      }}
    >
      <Typography component="legend">Rating</Typography>
<Rating
  name="simple-controlled"
  
  value={review.rating}
  onChange={(event, newValue) => {
    setReview({...review, rating:newValue});
  }}
/>  
     
      <TextField
        fullWidth="20"
        Height="20"
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Description"
        defaultValue={review.description}
        onChange={(event) => {
            setReview({...review, description:event.target.value});
          }}
      />

      <Button variant="contained" onClick={onClickAdd}>Add</Button>
    </Box>
  );
}