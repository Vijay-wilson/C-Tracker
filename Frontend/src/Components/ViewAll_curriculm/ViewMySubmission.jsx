import React from 'react'
import {useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbardash from '../Userdashboard/Navbardash';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


// import PDFViewer from 'pdf-viewer-reactjs'
// import Admin_navbar from '../Admindashboard/Admin_navbar';
// import Navbardash from '../Userdashboard/Navbardash';
// import Sidebar from '../Userdashboard/Sidebar';


const ViewMySubmission = () => {
    var [curriculum,setCurriculum]=useState([])
  var [id,setId] = useState();
  const navigate =useNavigate();
  

  useEffect(() => {
    displayCurriculum();
    },[]
  );

  const displayCurriculum=()=>{
    const userData={

      "file":'',
      "comments":'',
      "title":'',
      "area":'',
      "category":'',
      "institution":'',
      "id":''

    }
    // axios.get(`http://localhost:3005/curriculum/`,userData)//all submission
     axios.get(`http://localhost:3005/curriculum/?status=notapproved`)//not approved
      .then((response)=>{
        console.log(response.data)
        setCurriculum(response.data)
      })
      .catch(
        (error)=>{
          console.log("The error loading data"+error)
        }
      )
  }




  // const UpdateCurriculum=()=>{
  //   // axios.post('http://localhost:3005/curupdate')
  //   // let data=
  //   // {"pdfpath":userId,"comments":input.Name,"title":input.Age,"area":input.Designation,"institution":input.Salary,  
  //   //     "category": usertoken}
  //   axios.post('http://localhost:3005/curupdate')
  

  //     .then((response)=>{
  //       console.log(response.data);
  //       setCurriculum(response.data);
  //       alert("Successfully Approved")
  //     }) 
  //     .catch(
  //       (error)=>{
  //         console.log("The error loading data"+error)
  //       })
  // }

  // const DeleteCurriculum=()=>{
    
  //   axios.delete(`http://localhost:3005/curricul/delete/${id}`)
  //     .then((response)=>{
  //       console.log(response.data);
  //       setCurriculum(response.data);
  //       alert("Successfully Rejected");
  //       navigate('/curriculumdisplay')
  //     }) 
  //    .catch(
  //     (error)=>{
  //       console.log("The error loading data"+error)
  //     })
  // }
  
  const downloadCurriculum=()=>{
    const userData={

      "file":'',
      
      "id":''

    }

    axios.get(`http://localhost:3005/download/${id}`,userData)
      .then((response)=>{
        
        console.log(response.data);
        setCurriculum(response.data);
        
        alert("Successfully downloaded");
        navigate('/curriculumdisplay')
       }) 
     .catch(
        (error)=>{
          console.log("The error loading data"+error)
        })
  }

 
  const viewCurriculum = (id) => {
    window.open(`http://localhost:3005/curfileopen/${id}`, "_blank");
    
  }
  

  return (
    <>
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
     
      <div className='container curriculumlist'>
        <div className="row curview">
           
        <h3 style={{marginLeft: '22rem', marginTop:'2.7rem'}}>My Submissions</h3> 
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
              <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                

                  <table className="table table-striped border-primary" >
                    <thead>
                      <tr className="bg-dark text-white" class="bg-gray-50 currrow">
                        <th scope="col">Name</th>
                        <th scope="col">Area</th>
                        <th scope="col">Category</th>
                        <th scope="col">Institution</th>
                        <th scope="col">Comments</th>
                        <th style={{textAlign:'center'}} scope="col">Curriculum</th>
                        {/* <th scope="col">Status</th> */}
                        <th></th>
                      </tr>
                    </thead>
                    <tbody class="curriculumbody">
                      {curriculum.map((value,index)=>{
                        return <tr>
                            <td>{value.title}</td>
                            <td>{value.area}</td>
                            <td>{value.category}</td>
                            <td>{value.institution}</td>
                            <td>{value.comments}</td>
                            <td className="col">
                  <a onClick={(e)=>viewCurriculum(value._id)} rel="noreferrer" >
                        {value.pdfpath}
                  </a>
            </td>
                            {/* <td>{value.status}</td> */}
                            {/* <td>{value._id}</td> */}
                            <td>
                              {/* <Link >  <button  type="button" class="btn btn-success" onClick={UpdateCurriculum}>edit</button></Link></td> */}
                            <Link to ={`/updMysubmission/${value._id}`}>              
         <button  style={{margin:'0'}} className="btn btn-success">edit</button>               
        </Link> </td>
       <td >              
         {/* <button className="btn btn-primary">DOWNLOAD</button>                */}
         </td>
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

</div>
<div className="row g-3">
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 footeruser" style={{backgroundColor:"#1EA1CE", bottom:0}}>
          <p style={{textAlign:'center',backgroundColor:"#1EA1CE", fontSize:'small', marginTop:'.3rem' }}>
            Copyright © 2023 ICT Academy Curriculum Tracker. All Rights Reserved
          </p>
        </div>
      </div>
</div>
    </>
  )
}

export default ViewMySubmission