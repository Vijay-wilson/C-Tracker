import React from 'react'
import './userstyle.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Navbardash = () => {
    const navigate=useNavigate()
    const logout = () => {
        const jwt = localStorage.getItem("token");
        axios.post(
          "http://localhost:3005/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        ).then((response) => {
          localStorage.removeItem("token"); // remove JWT from client-side storage
          window.location.href = "/login"; // redirect to login page
        }).catch((error) => {
          console.log(error);
        });
      };


    return (
        <div>
            <nav class="navbar navbar-expand-lg " style={{backgroundColor:'#1EA1CE'}}>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="/"><img src={require('./logo.svg.png')}  alt="..." style={{width:"50px",height:"50px"}} /><h5 style={{marginLeft:'8px'}}>Curriculum Tracker</h5></a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{paddingRight:"5%"}}>
                            <li class="nav-item">
                                <a class="nav-link" href="/searchcurriculum"><input class="form-control me-2" type="search"  placeholder="Search Curriculum" aria-label="Search" /></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-user"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                                    <li><a class="dropdown-item" href="/user"style={{color:"#2b2c2c"}}>Dashbord</a></li>
                                    {/* <li><a class="dropdown-item" href="/uprofile" style={{color:"#2b2c2c"}}>My Profile</a></li> */}
                                    {/* <li><a class="dropdown-item" href="/user"style={{color:"#2b2c2c"}}>Settings</a></li> */}
                                    <li><a class="dropdown-item" onClick={logout} href="/"style={{color:"#2b2c2c"}}>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbardash