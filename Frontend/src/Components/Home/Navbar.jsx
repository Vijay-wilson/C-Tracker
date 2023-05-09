import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top " style={{ backgroundColor:"#1EA1CF"}} >
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img src={require('./logo.svg.png')}  alt="..." style={{width:"50px",height:"50px"}} /><h5 style={{marginLeft:'8px'}}>Curriculum Tracker</h5></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end " style={{ backgroundColor:"#1EA1CE"}} tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{color:"white"}}>Curriculum Tracker</h5>
           
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./login">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./signup">Signup</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="./login">Curriculum</a>
                </li> */}
              </ul>
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar