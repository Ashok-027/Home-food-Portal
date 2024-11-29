import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

function AboutUs() {
  const containerStyle1 = { backgroundColor: "white", margin: "0 auto 70px auto" , padding:"0 30px 30px 30px"}
  const containerStyle2 = { backgroundColor:"black" , borderRadius:"15px" , padding:"0 20px 20px 20px" , marginTop:"20px"}
  return (
    <>
      <Navbar />
      <Container style={containerStyle1}>
        <Grid container spacing={2} style={{paddingTop:"0px"}}>
          <Grid item xs={12} style={{display:"flex" , justifyContent:"center"}}>
            <Typography variant="h3"><b>ABOUT US</b></Typography>
          </Grid>
          <Grid item xs={7}>
            <img src="images/aboutusimage.jpg" alt="about-us Image" style={{height:"250px" , width:"600px"}}/>
          </Grid>
          <Grid item xs={5} style={{display:"flex" , alignItems:"center"}}>
            <Typography variant="overline"><b>We have been serving irresistible comfort food since 2022. Our mission is to keep you smiling with every bite. Treat yourself to a feel-good meal today!</b></Typography>
          </Grid>
          <Container style={containerStyle2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" style={{display:"flex" , justifyContent:"center" , marginBottom:"10px" , color:"white"}}><b>WHO WE ARE?</b></Typography>
              </Grid>
              <Grid item xs={8} style={{color:"white" , display:"flex" , alignItems:"center" , flexDirection:"column"}}>
                <Typography variant="h5" style={{marginBottom:"20px"}}>Teamwork</Typography>
                <Typography variant="body1"><i>“Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.”</i></Typography>
              </Grid>
              <Grid item xs={4} style={{backgroundColor:"#d9d4c5" , display:"flex" , justifyContent:"center" , color:"black" , padding:"16px"}}>
                <ul>
                  <li><Typography variant="overline"><b>Rohith</b></Typography></li>
                  <li><Typography variant="overline"><b>Ashok Kumar</b></Typography></li>
                  <li><Typography variant="overline"><b>Sai Srujan</b></Typography></li>
                  <li><Typography variant="overline"><b>Akshat</b></Typography></li>
                  <li><Typography variant="overline"><b>Oviya</b></Typography></li>
                  <li><Typography variant="overline"><b>Jothika</b></Typography></li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;