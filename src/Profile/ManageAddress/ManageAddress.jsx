import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, InputBase, IconButton } from '@mui/material';
import {CreditCard, ExitToApp,} from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import img1 from "../../Images/home-4.png";
import {Link} from "react-router-dom";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const address = [
  {
    id: 1,
    name: "Wilson Storm",
    address: "New York, USA",
    number: "+173883772242",
  },
  {
    id: 2,
    name: "Sam Watson",
    address: "New York, USA",
    number: "+173883772242",
  },
  {
    id: 3,
    name: "Tom Hardy",
    address: "New York, USA",
    number: "+173883772242",
  },
  {
    id: 4,
    name: "Wilson Fisk",
    address: "New York, USA",
    number: "+173883772242",
  },
];

function ManageAddress() {

  const[addres, setAddress] = useState(address);

  const handleDelete = (id) => {
    setAddress(addres.filter((item) => item.id !== id));
  }

  const handleLogout = () => {
    sessionStorage.removeItem("Token");
  }

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        
        {/* Profile Title */}
        <Box sx={{display: {sm: 'block',md:'flex'}, flexDirection: {sm: 'column', md: 'row'}, justifyContent: 'space-between'}}>
          <Typography variant="h3" sx={{ color: '#fff', mb: 3 }}>My Profile</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid #00FF00', borderRadius: '10px', padding: '0px 10px', backgroundColor: '#000', width: '100%', maxWidth: '450px', height: '55px', color: '#fff',  marginBottom: {xs: 3}}}>
            <InputBase placeholder="Search address" sx={{ color: '#FFFFFF', flex: 1, paddingLeft: '8px', fontSize: '1.2rem', color: '#fff'}}/>
            <IconButton type="submit" sx={{ padding: '10px', color: '#FFFFFF' }}>
              <SearchIcon sx={{fontSize: '2.2rem'}}/>
            </IconButton>
          </Box>
        </Box>

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
          
        {/* Multiple Address-Section */}
        <Grid item xs={12} sm={8} md={9}>
          {addres.map((item) => (
            <Box key={item.id} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F8F7F7', borderRadius: 2, mb: 3, p: 3, color: '#000',}}>
              <Box sx={{  display: {xs:'block', md:'flex'}, flexDirection: {xs: 'column', md: 'row'},  alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                <Box sx={{ width: 25, height: 25, borderRadius: '50%', border: '3px solid #00FF00', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2,}}>
                  <Box sx={{ width: 15, height: 15, backgroundColor: item.id === 1 ? '#00FF00' : 'transparent', borderRadius: '50%',}}/>
                </Box>
                <Typography variant='h6' fontWeight={'bold'} sx={{marginTop: {xs: '20px', md: '0px'}}} fontFamily= '"Poppins", sans-serif' >{item.name}</Typography>
                <Typography variant='h6' fontWeight={'bold'}>{item.address}</Typography>
                <Typography variant="h6" sx={{ color: '#9B9999'}}>{item.number}</Typography>
                <Button sx={{ textTransform: 'none', color: '#000', mr: 2, textDecoration: 'underline', fontSize: '1.1rem'}}>Edit Address</Button>
              </Box>
              {/* Action Buttons */}
              <Box sx={{ position: 'relative', left: {xs: '35px', md:'35px'} }}>
                <DeleteOutlinedIcon sx={{ backgroundColor: '#5FEF45', color: '#000', borderRadius: '50%', fontSize: '2.2rem', cursor: 'pointer' }} onClick={() => handleDelete(item.id)}>
                  <RoomOutlinedIcon/>
                </DeleteOutlinedIcon>
              </Box>
            </Box>
          ))}
        </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default ManageAddress;
