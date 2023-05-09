import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Navbardash from '../Userdashboard/Navbardash';


const Searchcurriculum = () => {
  const[input, setInput]=useState([])
  const apiurl="http://localhost:3005/api/SearchCurriculum"

  const changeInput=(event)=>{
    
    setInput({
      ...input,[event.target.name]:event.target.value
    })
  }

  const [result, setResult]=useState([])

  const searchbtnclick = () => {
    console.log(input);
    axios.post(apiurl,input).then(
      (Response)=>{
        setResult(Response.data)
      }
    )
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
                   href="javascript:void(0)"
                   onClick={() => window.history.back()}
                   style={{
                    marginLeft:'3rem',
                     backgroundColor: " #f0f0f0",
                     color: "#1E90FF",
                     fontWeight: "bolder",
                   }}
                 >
                   {" "}
                  DASHBOARD
                 </a>
                 <a
                   className="active"
                   href=""
                   style={{
                    marginLeft:'-.9rem',
                     backgroundColor: " #f0f0f0",
                     color: "#1E90FF",
                     fontWeight: "bold",
                   }}
                 >
                   {" "}
                  Search Curriculum
                 </a>
                 <h6 style={{marginLeft:'1rem', fontWeight:'400' }}>Name</h6> 
                 <div className='search'>
                    <div className='searchInputs'>
                      <input type="text" name='title' placeholder='Search by name'  onChange={changeInput} style={{ display: 'inline-block',width:'13rem', fontSize:'smaller', marginLeft:'1rem' }} />
                      <div className='searchIcon' onClick={searchbtnclick} style={{ display: 'inline-block' }} > <SearchIcon/>
                      </div>
                    </div>
                </div>
                  

                  <br />
                  <h6 style={{marginLeft:'1rem', fontWeight:'400' }}>Area</h6>
                  <div className='search'>
                    <div className='searchInputs'>
                      <input type="text" name='area' placeholder='Search by area'  onChange={changeInput} style={{ display: 'inline-block',width:'13rem', fontSize:'smaller', marginLeft:'1rem' }} />
                      <div className='searchIcon' onClick={searchbtnclick} style={{ display: 'inline-block' }} > <SearchIcon/>
                  </div>
                  </div>
                </div>

                  <br />
                  <h6 style={{marginLeft:'1rem', fontWeight:'400' }}>Institution</h6>    
                  <div className='search'>
                    <div className='searchInputs'>
                      <input type="text" name='institution' placeholder='Search by institution'  onChange={changeInput} style={{ display: 'inline-block',width:'13rem', fontSize:'smaller', marginLeft:'1rem' }} />
                      <div className='searchIcon' onClick={searchbtnclick} style={{ display: 'inline-block' }} > <SearchIcon/>
                  </div>
                  </div>
                </div>
                 

                  <br />
                  <h6 style={{marginLeft:'1rem', fontWeight:'400' }}>Category</h6>    
                  <div className='search'>
                    <div className='searchInputs'>
                      <input type="text" name='category' placeholder='Search by category'  onChange={changeInput} style={{ display: 'inline-block',width:'13rem', fontSize:'smaller', marginLeft:'1rem' }} />
                      <div className='searchIcon' onClick={searchbtnclick} style={{ display: 'inline-block' }} > <SearchIcon/>
                  </div>
                  </div>
                </div>
                
              </div>

              
              </div>

               
        <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  
                  <h3 style={{marginLeft: '25rem', marginTop:'2rem'}}>Curriculum</h3>
                 <table className="table table-striped border-primary">
               <thead table-light>
                 <tr >
                   <th scope="col">Name</th>
                   <th scope="col">Area</th>
                   <th scope="col">Institution</th>
                   <th scope="col">Category</th>
                   <th scope="col">Curriculum</th>
                   {/* <th scope="col">References</th> */}
                   {/* <th scope="col"></th> */}
                 </tr>
               </thead>
               <tbody table-light>
                 
                 {result.map(
                     (item)=>{
                         return <tr key={item._id}>
                         <td>{item.title}</td>
                           <td>{item.area}</td>
                           <td>{item.institution}</td>
                           <td>{item.category}</td>
                           <td>{item.pdfpath}</td>
                           {/* <td>{item.imgpath}</td> */}
                           
                          
                         </tr>
                         
                     }
                 )}
                 
               </tbody>
             </table>
                             <section className="userright d-flex"></section>
             
                             <section className="userright  d-flex"></section>
                           
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
             
             
export default Searchcurriculum