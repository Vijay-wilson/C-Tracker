import React from 'react'
import {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './curriculumdisplay.css'
import PDFViewer from 'pdf-viewer-reactjs'
import Admin_navbar from '../Admindashboard/Admin_navbar';
import { Navbar } from 'react-bootstrap';
import Navbardash from '../Userdashboard/Navbardash';
import { Link } from 'react-router-dom'
import { id } from 'date-fns/locale';
var fileDownload = require('js-file-download');

const CurriculumDisplay = () => {

  var [curriculum,setCurriculum]=useState([])
  const [filePath, setFilePath] = React.useState("file:///C:/Users/Salini/Downloads/B - Child Properties.pdf");
  // var [id,setId] = useState();
  const [status, setStatus] = useState('notapproved');
  const navigate =useNavigate();
  const {objId}=useParams();

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

    axios.post('http://localhost:3005/displaycurriculum',userData)
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


  const UpdateCurriculum=async (id) => {
    try {
     console.log(objId);
      const response = await axios.put('http://localhost:3005/curupdate/'+id, {id , status: 'approved' });
      console.log(id);
      console.log(response.data);
      setStatus('approved'); // Update local state to reflect the updated status
      alert("Successfully Approved");
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };

  const DeleteCurriculum=async(id)=>{   
   
    try {
      await axios.delete('http://localhost:3005/curricul/delete/'+id);
      // setCurriculum((prevCurriculum) => prevCurriculum.filter((c) => c._id !== id));
      alert('Successfully deleted curriculum!');
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };
  
  const downloadCurriculum=(id)=>{
    // e.preventDefault()
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
    const userData={

      "file":'',
      
      "id":''

    }

    axios.get(`http://localhost:3005/download/${id}`,userData)
      .then((response)=>{
        
        console.log(response.data);
        setCurriculum(response.data);
        
        alert("Successfully downloaded");
        navigate('/viewcurriculm')
       }) 
     .catch(
        (error)=>{
          console.log("The error loading data"+error)
        })
  }

  const viewCurriculum = (id) => {
    window.open(`http://localhost:3005/curfileopen/${id}`);
  }
  

  return (
    <div>
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
                  
     <h3 style={{marginLeft: '22rem', marginTop:'2%'}}>Curriculum</h3>
    <table className="table table-striped border-primary">
  <thead table-light>
    <tr >
    <th scope="col">Name</th>
          <th scope="col">Area Of Training</th>
          <th scope="col">Category</th>
          <th scope="col">Institution</th>
          <th scope="col">Comments</th>
          <th scope="col">Curriculum</th>
          <th></th>
          <th></th>
          <th></th>
    </tr>
 </thead>
      <tbody className="curriculumbody">
        {curriculum.map((value,index)=>{
          return <tr key={index}>
            <td className="col">{value.title}</td>
            <td className="col">{value.area}</td>
            <td className="col">{value.category}</td>
            <td className="col">{value.institution}</td>
            <td className="col">{value.comments}</td>
            <td className="col">
                  <a onClick={(e)=>viewCurriculum(value._id)} target="_blank">
                        {value.pdfpath}
                  </a>
            </td>

            <td className="col">
              <button style={{margin:'0'}} className="btn btn-primary" onClick={(e)=>downloadCurriculum(value._id)}>DOWNLOAD</button>
            </td>
            <td className="col">
            {value.status==='notapproved' ? (<button style={{margin:'0'}} className="btn btn-success" onClick={e => UpdateCurriculum(value._id)}>Approve</button>
      ) : (
        <button style={{margin:'0'}} className="btn btn-success" disabled>Approved</button>)}
              {/* <button className="btn btn-success" onClick={e => UpdateCurriculum(value._id)}>APPROVE</button> */}
            </td>
            <td className="col">
             {value.status==='approved' ? ( <button style={{margin:'0'}} className="btn btn-danger" disabled>REJECT</button>):(
               <button style={{margin:'0'}} className="btn btn-danger" onClick={e => DeleteCurriculum(value._id)}>REJECT</button>)}
             
            </td>
          </tr>
        })}
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

export default CurriculumDisplay