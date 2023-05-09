import React from "react";
import Admin_navbar from "./Admin_navbar";
import "./adminstyle.css";

const Admin = () => {
  return (
    <div>
      <Admin_navbar />
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
                {/* <h5 className="userhead">Welcome to ADMIN Dashboard</h5>
                <span className="greenbtn">
                  <a href="/curriculumdisplay">
                    <button>Submitted Curriculum</button>
                  </a>
                </span> */}
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
  );
};

export default Admin;
