import React from 'react'
import './adminstyle.css'

const Admin_navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbg" >
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="/admin"><img src={require('../imagelogo/logo_ct.png')}  alt="..." /></a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{paddingRight:"5%"}}>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-user"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                                    <li><a class="dropdown-item" href="/admin" style={{color:"#2b2c2c"}}>Dashbord</a></li>
                                    <li><a class="dropdown-item" href="/aprofile" style={{color:"#2b2c2c"}}>My Profile</a></li>
                                    <li><a class="dropdown-item" href="/admin"style={{color:"#2b2c2c"}}>Settings</a></li>
                                    <li><a class="dropdown-item" href="/"style={{color:"#2b2c2c"}}>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Admin_navbar