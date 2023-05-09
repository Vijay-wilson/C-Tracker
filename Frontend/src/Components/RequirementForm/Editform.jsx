import React, { useEffect, useState } from 'react'
// import Header from './Header'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Admin_navbar from './Admin_navbar'
import './req.css'
import { Navbar } from 'react-bootstrap'
import Navbardash from '../Userdashboard/Navbardash'


const Editform = () => {
  const navigate=useNavigate()
  const {id}=useParams();
  const apiurl = 'http://localhost:3005/api/updateRequirements/'+id
    
  const[input, setInput]=useState([])
  const[result, setResult]=useState([])

  const apiurl1 = 'http://localhost:3005/api/ViewRequirements'
  const[data, changedata]=useState([])

  // const navigate=useNavigate()
  

 useEffect(()=>{
  axios.post(apiurl1).then(
      (Response)=>{
          console.log(Response.data);
          changedata(Response.data)
      })
  },[])  


  const changeInput=(event)=>{    
    setInput({
      ...input,[event.target.name]:event.target.value
    })
  }


const buttonclick=()=>{
console.log(input);
axios.put(apiurl,input).then(
  (Response)=>{
    console.log(Response.data);
   setResult(Response.data)
 
    navigate('/requirementdisplay');

if (Response.data.status==="success"){
  alert("Requirement updated successfully")
}

  }
)
  }
  return (
    <div>
     
    <Navbardash />
    

    <div className="container-fluid ps-0">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                <div className="sidebar">
                  <a
                    className="active"
                    href="/requirementdisplay"
                    style={{
                      backgroundColor: " #f0f0f0",
                      color: "#1E90FF",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    DASHBOARD
                  </a>
                  <a href="/curriculumdisplay">
                    <i class="fa-solid fa-user"></i>&nbsp;&nbsp; New Curriculum
                  </a>
                  <a href="/requirement">
                    <i class="fa-solid fa-message"></i>&nbsp;&nbsp; Add Requirement
                  </a>
                  <a href="/viewcurriculm">
                    <i class="fa-solid fa-sheet-plastic"></i>&nbsp;&nbsp;
                    Curriculum
                  </a>
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
   
    <div className="mycontainer">
    {data.map((item)=>{
       if (item._id === id) {

            return <div className="row g-3">
            <br />
            <br />
         
            <h5 className='formheading'>Update Requirement</h5>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name of Requirement</label>
                <input type="text" name='reqname' placeholder={item.reqname}  className="form-control" onChange={changeInput} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Area</label>
                <input type="text" name='area' placeholder={item.area} className="form-control" onChange={changeInput} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Institution</label>
                <input type="text" name='institution' placeholder={item.institution} className="form-control" onChange={changeInput} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Category</label>
                <input type="text" name='catagory' placeholder={item.catagory} className="form-control"onChange={changeInput} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Training Hours</label>
                <input type="text" name='hours' placeholder={item.hours}  className="form-control"onChange={changeInput} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <button type='submit' className='btn btn-primary' onClick={buttonclick}>Update</button>
            </div>
        </div>
       }
          })}
            
           
        </div>
        <section></section>

<section></section>
</div>
</div>
</div>
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
  )
}



export default Editform