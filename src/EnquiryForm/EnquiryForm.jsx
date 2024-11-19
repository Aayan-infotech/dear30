import React from 'react';
import { Typography, Button, Box, Container, TextField, MenuItem} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function EnquiryForm() {
  return (
    <Box>
      <Box className="dealers-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Dealers</span>
          </Typography>
        </Container>
      </Box>

      <Box sx={{backgroundColor: 'black'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'black', color: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '550px', margin: '0rem auto', textAlign: 'left'}}>
        <Box sx={{alignItems: 'flex-start'}}>
          <Typography variant='h4' sx={{fontWeight: 'bold'}}>Dealer Inquiry Form</Typography>
          <Typography variant='h6' sx={{ marginBottom: '1rem', py: 2}}>Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</Typography>
        </Box>
        <Box component="form" sx={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%'}}>
          <Box sx={{display: 'flex', gap: '1rem'}}>
            <TextField fullWidth label="First Name" variant='outlined' sx={{borderRadius: '5px', backgroundColor: 'white', '& .MuiInputLabel-root': {color: 'gray'}}}/>
            <TextField fullWidth label="Last Name" variant='outlined' sx={{borderRadius: '5px', backgroundColor: 'white'}}/>
          </Box>
            <TextField fullWidth label="Email" variant='outlined' sx={{borderRadius: '5px', backgroundColor: 'white'}}/>
            <TextField fullWidth label="Phone Number" variant='outlined' sx={{borderRadius: '5px', backgroundColor: 'white'}}/>
            <TextField fullWidth label="First Name" variant='outlined' sx={{borderRadius: '5px', backgroundColor: 'white'}}/>
            <TextField fullWidth select label="Business Type" variant='outlined' sx={{borderRadius: '5px', backgroundColor: 'white'}}>
              <MenuItem value="Retailer">Retailer</MenuItem>
              <MenuItem value="Distributor">Distributor</MenuItem>
              <MenuItem value="Wholesaler">Wholesaler</MenuItem>
            </TextField>
            <Box sx={{ display: 'inline-block',p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)'}}>
              <Button type="submit" fullWidth variant="contained" sx={{background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)'}}>Submit</Button>
            </Box>
        </Box>
      </Box>
      </Box>

    </Box>
  )
}

export default EnquiryForm