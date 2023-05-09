import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Icon from "react-crud-icons";
import "../../../node_modules/react-crud-icons/dist/css/react-crud-icons.css";
import Admin_navbar from './Admin_navbar';
import { Navbar } from 'react-bootstrap';
import Navbardash from '../Userdashboard/Navbardash';
import SearchIcon from '@mui/icons-material/Search';


// import Header from './Header'
const RequirementDisplay = () => {
 
    const apiurl = 'http://localhost:3005/api/ViewRequirements'
    const[data, changedata]=useState([])
    const[usertoken, settoken]=useState(localStorage.getItem('token'))

    const navigate=useNavigate()
    

   useEffect(()=>{
    axios.post(apiurl,{"token":usertoken}).then(
        (Response)=>{
            console.log(Response.data);
            changedata(Response.data)
        })
    },[])  
    
    
    const deletebtn=async(id)=>{
      try {
        axios.delete('http://localhost:3005/api/deleteRequirements/'+id)
        window.location.reload()
      
        
      } catch (error) {
        console.log(error);
      }
          }     
          
     const viewCurriculum = (id, pdfpath) => {
      // const fileName = pdfpath.substring(pdfpath.lastIndexOf("/") + 1);
     
      window.open(`http://localhost:3005/reqfileopen/${id}`, "_blank");
          }
          
 
   return (
    <div >
     <Navbardash/>

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
                    ADMIN DASHBOARD
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
                  <a href="/searchbar">
                  <i class="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;
                    Search
                  </a>
                  
                  <div className="container">
    
    </div>
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  
     <h3 style={{marginLeft: '22rem', marginTop:'2%'}}>Requirements</h3>
    <table className="table table-striped border-primary">
  <thead table-light>
    <tr >
      <th scope="col">Name</th>
      <th scope="col">Area</th>
      <th scope="col">Institution</th>
      <th scope="col">Category</th>
      <th scope="col">Training Hours</th>
      <th scope="col">References</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody table-light>
    
    {data.map(
        (item)=>{
            return <tr key={item._id}>
            <td>{item.reqname}</td>
              <td>{item.area}</td>
              <td>{item.institution}</td>
              <td>{item.catagory}</td>
              <td>{item.hours}</td>
              <td className="col">
                  <a onClick={(e)=>viewCurriculum(item._id)}  target="_blank">
                        {item.pdfpath}
                  </a>
            </td>
              
              <td>
                {/* <Link to ={`/updateRequirements/${item._id}`} className='' style={{ width: '100px', marginLeft: '10px',marginTop:1, marginBottom:1 }}>Update</Link> */}
              
                <Link to={`/updateRequirements/${item._id}`} className=''>
                <Icon name = "edit" tooltip = "Edit"  theme = "light"  size = "small" style={{ cursor: 'pointer' }} />
                </Link>
       
                <Link to={``} className=''>
                <Icon name = "delete" tooltip = "Delete"  theme = "light"  size = "small" style={{ cursor: 'pointer' }} onClick={ e => deletebtn(item._id)} />
                </Link>

              
              {/* <button onClick={()=> navigate(`/editform/${item._id}`)} >Update</button> */}
             
              {/* <button onClick={ e => deletebtn(item._id)} className='btn btn-primary' style={{ width: '100px', marginLeft: '10px', marginTop:1, marginBottom:1 }} >Delete</button> */}
              {/* <Link to ={''} onClick={ e => deletebtn(item._id)} className='btn btn-primary' style={{ width: '100px', marginLeft: '10px',marginTop:1, marginBottom:1 }}>Delete</Link>               */}
              </td>
            </tr>
            
        }
    )}
    
  </tbody>
</table>
                {/* <section className="userright d-flex"></section>

                <section className="userright  d-flex"></section> */}
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


export default RequirementDisplay