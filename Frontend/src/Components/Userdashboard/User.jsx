import React from "react";
import Navbardash from "./Navbardash";
import "./userstyle.css";
import axios from "axios";
import { Link } from 'react-router-dom'
import Icon from "react-crud-icons";

import  { useEffect, useState } from "react";
const User = () => {


  const [requirement, setRequirement] = useState([]);
  const[usertoken, settoken]=useState(localStorage.getItem('token'))

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3005/reqlist", {"token":usertoken})
      .then((response) => {
        setRequirement(response.data);
      })
      .catch((error) => {
        console.log("error in loading data" + error);
      });
  };

  const viewCurriculum = (id, pdfpath) => {
    // const fileName = pdfpath.substring(pdfpath.lastIndexOf("/") + 1);
   
    window.open(`http://localhost:3005/reqfileopen/${id}`, "_blank");
        }
        
  return (
    <div>
      <Navbardash />
      <div className="container-fluid ps-0">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                <div class="sidebar">
                  <a
                    class="active"
                    href="/user"
                    style={{
                      backgroundColor: " #f0f0f0",
                      color: "#1E90FF",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    FACULTY DASHBOARD
                  </a>
                  {/* <a href="/uprofile">
                    <i class="fa-solid fa-user"></i>&nbsp;&nbsp; My Profile
                   
                  </a> */}
                  <a href="/viewmysubmission">
                 
                    <i class="fa-solid fa-message"></i>&nbsp;&nbsp; My Submissions
                  </a>
                  {/* <a href="/recvrqrmnt">
                    <i class="fa-solid fa-message"></i>&nbsp;&nbsp; View
                    Requirements
                  </a> */}
                  <a href="/viewallfaculty">
                    <i class="fa-solid fa-sheet-plastic"></i>&nbsp;&nbsp;
                    View Past Curriculum
                  </a>
                  <a href="/uploadfile">
                    <i class="fa-solid fa-sheet-plastic"></i>&nbsp;&nbsp;
                    Upload Curriculum
                  </a>
                  <a href="/searchbar">
                  <i class="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;
                    Search
                  </a>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                <h5 className="userhead"></h5>
                <div>
      {/* <Navbardash /> */}
      {/* <div className="card" > */}
      {/* <div className="container faculty_req"> */}
      <div className="container ">
        {/* <div className="row recv-req"> */}
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h3 style={{marginLeft: '22rem', marginTop:'.3rem'}}>Requirements</h3>
        
          
            <div className="table-responsive-lg">
          
            <table className="table table-striped border-primary">
            <thead table-light>
                <tr
                  style={{
                    color: "#1E90FF",
                    color:"white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                    textAlign:'center'
                  }}
                >
              
                  <th scope="col" >Name </th>
                  <th scope="col">Area of training </th>
                  <th scope="col">Institution</th>
                  <th scope="col" >Category</th>
                  <th scope="col">Training Hours</th>
                  <th scope="col">Reference</th>
                  <th scope="col">Upload Curriculum</th>
                </tr>
              </thead>
              <tbody>
                {requirement.map((value, index) => {
                  return (
                    <tr >
                    
                      <td >{value.reqname}</td>
                      <td>{value.area}</td>
                      <td>{value.institution}</td>
                      <td>{value.catagory}</td>
                      <td>{value.hours}</td>
                      <td className="col">
                          <a onClick={(e)=>viewCurriculum(value._id)} rel="noreferrer" >
                            {value.pdfpath}
                          </a>
                    </td>
                     <td style={{ textAlign: 'center' }}> <Link to={'/uploadfile'} className=''>
                <Icon name = "upload" tooltip = "Upload"  theme = "light"  size = "small" style={{ cursor: 'pointer' }} />
                </Link>
</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>

    {/* <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
    <span className="greenbtn">
      <a href="/uploadfile">
        <button  type="button" class="btn btn-primary btn-sm">Upload Curriculum</button>
      </a>
    </span>
    </div> */}

{/* 
    <section className="userright d-flex">
    
    </section>
    <section className="userright  d-flex"></section> */}


           </div>     
    </div>
              
   
      <div className="row g-3">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 footeruser" style={{backgroundColor:"#1EA1CE", bottom:0}}>
          <p style={{textAlign:'center',backgroundColor:"#1EA1CE", fontSize:'small', marginTop:'.3rem' }}>
            Copyright © 2023 ICT Academy Curriculum Tracker. All Rights Reserved
          </p>
        </div>
      </div>
  </div>
    </div>
  );
};

export default User;
