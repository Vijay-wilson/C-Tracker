import React from "react";
import Navbar from "./Navbar";
import { Row, Col } from "react-bootstrap";
import { Height } from "@mui/icons-material";


const Home = () => {
  return (
    <div>
      <div style={{ marginBottom: "80px" }}>
        <Navbar />
      </div>
      <Row style={{marginTop:"200px"}}/>
      <Row >
        {/* <Col lg={1}></Col> */}
        <Col lg={6} style={{marginTop:'-1rem'}}>
          <h2 style={{textAlign:"center", fontFamily:'unset', fontSize:'4rem', color:'#008000' }}>Effortlessly monitor and manage curriculum with </h2>
          <p style={{textAlign:"center",fontFamily:'unset', fontSize:'4rem', color:'#DE3163' }}>
            Curriculum Tracker </p>
            <p style={{textAlign:"center", fontFamily:'inherit',fontWeight:'bold', fontSize:'1.7rem', color:'#FFBA3E', marginTop:'-1rem' }}> All-in-One Solution for Curriculum Management
          </p> <br /> <br />  <br /> <br />
            <p style={{textAlign:"center", fontFamily:'inherit', fontSize:'1rem',fontWeight:'bold', color:'#0000C0' }}>Simplify Curriculum Planning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stay on Track &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Take Control of Your Curriculum  
          </p>
        

        </Col>
        {/* <Col lg={1}></Col> */}
        <Col lg={6}>
          <img style={{height:'37rem', width:'50rem', marginTop:'-8.5rem'}} src={require('./Home.jpeg')}/>
        </Col>
      </Row>
      <Row>  <div className="footer" style={{textAlign:'center',padding:'30px',backgroundColor:"#1EA1CE",bottom:0,position:"absolute"}}>
      Copyright © 2023 ICT Academy Curriculum Tracker. All Rights Reserved</div> </Row>
    </div>
  );
};

export default Home;
