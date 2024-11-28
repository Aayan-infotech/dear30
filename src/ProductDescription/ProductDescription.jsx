import React, { useState } from 'react';
import { Typography, Button, Box, Container, IconButton, Divider} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import img1 from "../Images/productDesc-1.png"
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img4 from "../Images/home-4.png";
import img2 from "../Images/home-2.png";
import {Link} from "react-router-dom";


const customers = [
  {
      description:"“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
      img: img4,
      name: "Jane Smith",
      title: "Freelance Designer",
  },
  {
      description:"“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
      img: img4,
      name: "Tom Williams",
      title: "Software Developer",
  },
  {
      description:"“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
      img: img4,
      name: "Michael Brown",
      title: "Online Entrepreneur",
  }
]

function ProductDescription() {
  const[quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity(prev => (type === 'increment' ? prev + 1 : prev > 1 ? prev - 1: 1));
  }
  
  const prodDescription = {
    img: img1,
    title: "Millennium Treestands Q-230 Buck Hut Shooting House Blind and Tower Combo",
    price: "$350.00",
    description: "True North Treestands is very proud to present this first of its kind, the TNT MENTOR 2 person hang-on treestand (patent pending). This stand features our 14 oz. TNT Bracket (patent pending) hanging system and our single pin micro- position leveling stem. With a commitment to being industry leaders and innovators, we’ve delivered on our commitment with the Mentor. The stand boasts a huge 43” x 30” platform, two individually hinged Teslin seats, and backrests, and it weighs in at just 49 lbs. The TNT Mentor’s set-up is achieved using our TNT Universal “V” Bracket system. Also included with the Mentor, at a value of $49.99, is the TNT HOH (HANG-ON HOIST), to aid with the Mentor’s set-up",
    specifications: [
      "Rugged steel construction",
      "Three easy to install TNT Universal Quick Hitch 'V' Brackets (Patent Pending)",
      "Additional brackets available as accessories",
      "Heavy-duty 1.5 inch, 3000 lbs. capacity 'J' hook with keeper ratchet strap assemblies",
      "Two full-body, four-point Certified FAS (Fall-Arrest System)",
      "Camouflage padded armrests",
      "Stand Weight: 49.50 lbs",
      "1 year limited warranty",
    ]
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const products = [
    {
      img: img2,  
      title: "TNT PIPE DREAM LOCK ON",
      price: "280.00",
    },
    {
      img: img2,
      title: "TNT PIPE DREAM LOCK ON",
      price: "280.00",
    },
    {
      img: img2,
      title: "TNT PIPE DREAM LOCK ON",
      price: "280.00",
    },
  ];

  return (
    <Box>
      <Box className="prod-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Products</span>
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#000", color: "#fff", paddingY: 4 }}>  
        <Container maxWidth={false} className="container">
          <Box sx={{display: {xs: 'column', md:'flex'}, justifyContent: 'space-between'}}>
            <Box component="img" src={prodDescription.img} alt={prodDescription.title} sx={{ height: "600px", width: "100%", objectFit: "contain", borderRadius: "10px" }}/>

            <Box sx={{mr: 4}}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 4 }}>{prodDescription.title}</Typography>
              <Box sx={{display: {xs: 'column',md:'flex'}, justifyContent: 'space-between'}}>
                <Typography variant="h3" sx={{ color: "#4CAF50", my: 4, fontWeight: 'bold', mb: {xs: 2, md: 4} }}>{prodDescription.price}</Typography>

                <Box sx={{display: 'flex', mt: 2 }}>
                  <Typography variant='h6' sx={{mr:2, mt: 4}}>Quantity</Typography>
                  <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box display="flex" sx={{ color: "#FFDD44", ml: 2 }}>
                      {[...Array(5)].map((_, i) => (i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />))}
                    </Box>
                    <Box sx={{border: '1px solid #5FEF45', borderRadius: '5px'}} className="center-content">
                      <IconButton onClick={() => handleQuantityChange('decrement')}><RemoveIcon sx={{color: '#fff'}}/></IconButton>
                      <Typography variant="h6">{quantity}</Typography>
                      <IconButton onClick={() => handleQuantityChange('increment')}><AddIcon sx={{color: '#fff'}}/></IconButton>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={{display: {xs:'column',md:'flex'}, gap: '2', mt: 3}}>
                <Link to="/checkout"><Button variant='contained' color='success' sx={{ flex: 1, mr: 2, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: 16}}>Buy</Button></Link>
                <Link to="/cart"><Button variant='outlined' color='success' sx={{ flex: 1, ml: {xs: 0, md:2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: 10.5, mt: {xs: 2, md: 0} }}>Add to Cart</Button></Link>
              </Box>
            </Box>
          </Box>

          <Box sx={{mt: 5}}>
            <Typography variant="h3" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', mb: 2 }}>
              <GpsFixedIcon sx={{ fontSize: '2.5rem', mr: 1}} /> Description
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mb: 3 }}>{prodDescription.description}</Typography>

            <Typography variant='h6' sx={{fontWeight: 'bold', mb: 2}}>Specifications:</Typography>
            <Box component="ul" sx={{color: '#fff', mb: 3, ml: 3}}>
              {prodDescription.specifications.map((spec, index) =>(
                <li key={index}>{spec}</li>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className="customer-Sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4 }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: '2.5rem'}}/></span> Customers Reviews
            </Typography>

            <Slider {...settings} className="customer-reviews-slider">
                {customers.map((customer, index) => (
                <Box key={index} sx={{ padding: "30px", textAlign: "center", border: '2px solid #FFFFFF',  minHeight: '450px',height: 'auto', width: '400px', borderRadius: '10px', background: 'linear-gradient(135deg, #1c1c1c 0%, #333 100%)', mx: '2' }}>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      {customer.description}
                    </Typography>
                    <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", my: 2 }}>
                        {[...Array(5)].map((_, i) => (
                            i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                        ))}
                    </Box>
                    <Box component="img" src={customer.img} alt={customer.title} sx={{ height: "50px", width: "50px", objectFit: "cover", borderRadius: "50%", marginBottom: "10px", mx: 'auto'}}/>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                        {customer.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "silver" }}>
                        {customer.title}
                    </Typography>
                </Box>
                ))}
            </Slider>
            
          </Box>
        </Container>
      </Box>

      <Box className="products-sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4 }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: '2.5rem'}}/></span> Our Latest Products
            </Typography>

            <Slider {...settings}>
                {products.map((product, index) => (
                <Box key={index} sx={{ padding: "10px", textAlign: "center" }}>
                    <Box component="img" src={product.img} alt={product.title} sx={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px", marginBottom: "10px",}}/>
                    <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", mb: 1 }}>
                        {[...Array(5)].map((_, i) => (
                            i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                        ))}
                    </Box>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                        {product.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                        Regular price ${product.price}
                    </Typography>
                </Box>
                ))}
            </Slider>
            
          </Box>
        </Container>
     </Box>

    </Box>
  )
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box onClick={onClick} sx={{ position: "absolute", top: "50%", right: "23px"}} className="arrows">
      <KeyboardArrowRightOutlinedIcon sx={{fontSize: "3rem"}}/>
    </Box>
  );
};


const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box onClick={onClick} sx={{ position: "absolute", top: "50%", left: "23px",}} className="arrows">
      <KeyboardArrowRightOutlinedIcon sx={{ transform: "rotate(180deg)", fontSize: "3rem" }} />
    </Box>
  );
};

export default ProductDescription;
