import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbardash from '../Userdashboard/Navbardash'
import { Link, useNavigate } from 'react-router-dom'
var fileDownload = require('js-file-download');




const ViewCurriculm = () => {


  var [curriculum,setCurriculum]=useState([])
  var [id,setId] = useState();
  const navigate =useNavigate();
    const [viewallCurriculum,setViewallCurriculm] = useState([]);

    useEffect(()=>{
        getData();

    },[]
    )

    const getData=()=>{
      
      axios.get('http://localhost:3005/pastlistbyfaculty')
      .then(
          (response)=>{
              
              setViewallCurriculm(response.data)
              
          }

      ).catch(
          (error)=>{
              console.log("error in loading data"+error);

          }
      )
    }
    const downloadCurriculum=(id)=>{
      const apiurl='http://localhost:3005/filedownload/'+id
      axios({
        url:apiurl,
        
        method:'GET',
        responseType:'blob'
      }).then((res)=>{
        console.log(res);
        const fileName = `curriculum_${id}`
        fileDownload(res.data,fileName)
      })
    }

    const viewCurriculum = (id) => {
      window.open(`http://localhost:3005/curfileopen/${id}`, "_blank");
    }

  return (
      <div>
        <Navbardash/>
        
      
          {/* <div className="container"> */}
          {/* <div className="container-fluid ps-0"> */}
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
                  <a href="/viewallfaculty">
                    <i class="fa-solid fa-sheet-plastic"></i>&nbsp;&nbsp;
                    Past Curriculum
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
                <h5 className="userhead"></h5>
                <div>
            <div className="row">
            {/* <h5>View Past Curriculam</h5> */}
            <h3  style={{marginLeft: '22rem', marginTop:'.5rem'}}>View Past Curriculum</h3> 
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              
                {/* <table className="table"> */}
                <table className="table table-striped border-primary" >
                  <thead>
                    <tr>
                      {/* <th scope="col" style={{color:"#1E90FF",fontWeight:"bolder",fontSize:"18px"}}> Title</th>
                      <th scope="col" style={{color:"#1E90FF",fontWeight:"bolder",fontSize:"18px"}}>Past Curricculum</th>
                      <th scope="col" style={{color:"#1E90FF",fontWeight:"bolder",fontSize:"18px"}}>Download</th> */}

                      <th scope="col" >Title</th>
                      <th scope="col" >Training Area</th>
                      <th scope="col" >Instituition</th>
                      <th scope="col" >Category</th>
                      <th scope="col" >Comments</th>
                      <th scope="col">Status</th>
                      <th scope="col">Curriculum</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {viewallCurriculum.map(
                      (value,index)=>{
                        return <tr>
                          {/* <td>{value.title}</td>
                          <td>{value.pdfpath}</td> */}
                         
                          <td>{value.title}</td>
                          <td>{value.area}</td>
                          <td>{value.institution}</td>
                          <td>{value.category}</td>
                          <td>{value.comments}</td>
                        
                          <td>{value.status}</td>
                          <td className="col">
                  <a onClick={(e)=>viewCurriculum(value._id)}  target="_blank">
                        {value.pdfpath}
                  </a>
            </td>

                          <td><button style={{margin:'0'}} className="btn btn-primary" type="button" onClick={(e)=>downloadCurriculum(value._id)}>DOWNLOAD</button></td>
                          {/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */} 
                          {/* <Link to="uploads/db.pdf" target="_blank" download>Download</Link> */}
                          {/* <td>{value._id}</td> */}
                         
                        </tr> 
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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

export default ViewCurriculm