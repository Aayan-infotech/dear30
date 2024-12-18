import React from 'react';
import { Box, Container, Typography, Button, TextField, Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import {CreditCard, ExitToApp} from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import img1 from "../../Images/home-4.png";
import { Link } from "react-router-dom";

function PersonalInfo() {

  const handleLogout = () => {
    // console.log("It is cliecked");
    sessionStorage.removeItem("Token");
  }

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        
        {/* Profile Title */}
        <Typography variant="h3" sx={{ color: '#fff', mb: 3 }}>My Profile</Typography>

        <Grid container spacing={4}>
          
          {/* Sidebar Navigation */}
          <Grid item xs={12} sm={4} md={3}>
            <Box sx={{ backgroundColor: '#fff', borderRadius: 2 }}>
              <Box sx={{ mb: 2, display: 'flex', padding: '15px 15px 10px 15px'}}>
                <img src={img1} alt="Profile" style={{ borderRadius: '50%' }} />
                <Box sx={{marginLeft: '20px'}}>
                    <Typography variant="body6" color="textSecondary">Hello!</Typography>
                    <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold', fontSize: '1.3rem' }}>Robert Fox</Typography>
                </Box>
              </Box>
              <Divider sx={{ borderColor: '#2e2e2e', mb: 2 }} />
              <List component="nav">
                <Link to="/personalinfo" className='link-c'>
                  <ListItem button selected sx={{'&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><PermIdentityOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Personal Information" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem', whiteSpace: 'nowrap' } }}/>
                  </ListItem>
                </Link>
                
                <Link to="/myorders" className='link-c'>
                  <ListItem button sx={{my: 1,'&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><BorderAllOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="My Orders" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                <Link to="/manageaddress" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><RoomOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Manage Addresses" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem', whiteSpace: 'nowrap' } }}/>
                  </ListItem>
                </Link>

                <Link to="/savedcards" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><CreditCard sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Saved Cards" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                <Link to="/notifications" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><NotificationsNoneOutlinedIcon  sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Notifications" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                <Link to="/navigationuser" className='link-c' onClick={handleLogout}>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><ExitToApp sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Log Out" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>
              </List>
            </Box>
          </Grid>
          
          {/* Personal Information Form */}
          <Grid item xs={12} sm={8} md={9}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" variant="outlined" InputProps={{ sx: { color: '#fff', border: '2px solid silver' } }} InputLabelProps={{ sx: { color: 'silver' } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" variant="outlined" InputProps={{ sx: { color: '#fff', border: '2px solid silver' } }} InputLabelProps={{ sx: { color: 'silver' } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address" variant="outlined" InputProps={{ sx: { color: '#fff', border: '2px solid silver' } }} InputLabelProps={{ sx: { color: 'silver' } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Mobile No." variant="outlined" InputProps={{ sx: { color: '#fff', border: '2px solid silver' } }} InputLabelProps={{ sx: { color: 'silver' } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Gender" variant="outlined" InputProps={{ sx: { color: '#fff', border: '2px solid silver' } }} InputLabelProps={{ sx: { color: 'silver' } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="DOB" variant="outlined" InputProps={{ sx: { color: '#fff', border: '2px solid silver' } }} InputLabelProps={{ sx: { color: 'silver' } }} />
                </Grid>
              </Grid>

              {/* Update Button */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button variant="contained" sx={{ backgroundColor: '#5FEF45', color: '#fff', px: 10, fontSize: '1.2rem', textTransform: 'initial', fontWeight: 'bold' }}>Update</Button>
              </Box>
              {/* <Box sx={{ display: 'flex',justifyContent: 'center', mt: 3, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', px: 10}}>
              <Button variant="contained" sx={{background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'intial', px: 10}}>
                Log In
              </Button>
            </Box> */}

              {/* Change Password Section */}
              <Box sx={{ mt: 4 }}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Typography variant="h4" sx={{ color: '#fff', mb: 1 }}>Change Password</Typography>
                  <Typography variant="body6" sx={{ color: '#5FEF45', mb: 1 }}>Forgot Password?</Typography>
                </Box>
                <Typography variant="body3" color="textSecondary" sx={{color: '#fff', mb: 2 }}>
                  Type your new strong password. Your password must include:<br/> One capital letter & one small letter at least, one special character, and a minimum of 8 digits long.
                </Typography>
                <Grid container spacing={2} sx={{marginTop: '10px'}}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type="password" label="Password" variant="outlined" InputProps={{ sx: { color: '#fff', border: '2px solid silver' } }} InputLabelProps={{ sx: { color: 'silver' } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type="password" label="Confirm Password" variant="outlined" InputProps={{ sx: { color: '#fff', border: '2px solid silver' } }} InputLabelProps={{ sx: { color: 'silver' } }} />
                  </Grid>
                </Grid>

                {/* Reset Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >
                  <Button variant="contained" sx={{ backgroundColor: '#5FEF45', color: '#fff', px: 10, fontSize: '1.2rem', textTransform: 'initial', fontWeight: 'bold' }}>Reset</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PersonalInfo;
