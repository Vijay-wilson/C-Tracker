import React from 'react'
import {useState,useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbardash from '../Userdashboard/Navbardash';

const UpdMySubmission = () => {

    let { id } = useParams();

    const [title,setTitle]=useState("");
  const [area,setArea]=useState("");
  const [institution,setInstitution]=useState("");
  const [category,setCategory]=useState("");

    const [fileData, setFileData] = useState("");
    const [comments,setComments]=useState("");
    const navigate=useNavigate();

    const getFile = (e) => {
       setFileData(e.target.files[0]);
     };


    //to get curriculam for that id
     useEffect(()=>{
        axios.get(`http://localhost:3005/api/curriculum/`+id)
             .then((response)=>{
                 console.log(response.data)
                 setTitle(response.data.title)
                 setArea(response.data.area)
                 setInstitution(response.data.institution)
                 setCategory(response.data.category)
                 setFileData(response.data.fileData)
                 setComments(response.data.comments)
             })
         },[])


     const uploadFile =async (e) => { 

        e.preventDefault();   
        const data = new FormData();
        data.append("title", title);
        data.append("area", area);
        data.append("institution", institution);
        data.append("category", category);
        data.append("pdf", fileData);
        data.append("comments",comments);
        
        console.log(data);
        const config={
          headers:{
              "Content-Type":"multipart/form-data"
          }
      }
      
      const res=await axios.post("http://localhost:3005/api/updatecurriculumupload/"+id,data,config);
        console.log(res);
        if (res.statusText==="OK") {
             alert("Curriculumnp successfully updated");
            navigate('/viewmysubmission')
        }     
        
    }
  return (
    <div>
   <Navbardash/>
   <div className="container-fluid ps-0" >
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
    <section className="vh-50" style={{width:'70%'}} >
        <div className="container" >
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-9">
                    <div className="card" style={{borderRadius: "15px",width:"120%",backgroundColor:"#f0f0f0"}}>
                        <div className="card-body">
                          <h3>Update Curriculam</h3>
                            <div className="row align-items-center pt-4 pb-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0">Title</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="text" placeholder='Enter the Title of curriculum' className="form-control form-control-lg" onChange={(e)=>setTitle(e.target.value)} name="title" value={title}/>
                                </div>
                            </div>
                         
                            <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0">Training Area</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <select name="area"  onChange={(e)=>setArea(e.target.value)} style={{width:"100%",height:"40px"}} value={area}>
                                        <option selected>Select</option>
                                        <option>FSD</option>
                                        <option>ML-AI</option>
                                        <option>DSA</option>
                                        <option>RPA</option>
                                        <option>ST</option>
                                        <option>CSA</option>
                                    </select>
                                </div>
                            </div>
                      
                            <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0">Instituition</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="text" placeholder='Institution Name' className="form-control form-control-lg" onChange={(e)=>setInstitution(e.target.value)} name="institution" value={institution}/>
                                </div>
                            </div>
                         
                            <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0">Category</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <select name="category"  onChange={(e)=>setCategory(e.target.value)} style={{width:"100%",height:"40px"}} value={category}>
                                        <option>Retail</option>
                                        <option>Academic</option>
                                        <option>Corporate</option>
                                        <option>Govt</option>
                                       
                                    </select>
                                </div>
                            </div>
                       
                            <div className="row align-items-center pt-4 pb-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0">Comments</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                <textarea class="form-control" onChange={(e)=>setComments(e.target.value)} placeholder="Leave a message here" id="floatingTextarea2" style={{height: "100px"}} name='comments' value={comments}> </textarea>
                                </div>
                            </div>
                         
                            <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0">Upload File</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input className="form-control form-control-lg" id="formFileLg" type="file"  name="pdf" onChange={getFile} required  />
                                    <div className="small text-muted mt-2">Upload your file.</div>
                                </div>
                                
                                <div className="px-5 py-4">
                                    <button style={{marginBottom:'-3rem', marginTop:'-1rem'}} type="submit" className="btn btn-primary btn-lg" onClick={uploadFile} >Update Curriculum</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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


  )} 

export default UpdMySubmission