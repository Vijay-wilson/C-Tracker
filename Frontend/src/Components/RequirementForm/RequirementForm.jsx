import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./req.css";
import Admin_navbar from "../Admindashboard/Admin_navbar";
import { Navbar } from "react-bootstrap";
import Navbardash from "../Userdashboard/Navbardash";

const RequirementForm = () => {
  const [reqname, setReqname] = useState("");
  const [area, setArea] = useState("");
  const [institution, setInstitution] = useState("");
  const [catagory, setCatagory] = useState("");
  const [hours, setHours] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const setData = (e) => {
    e.preventDefault();
    const { value } = e.target;

    setReqname(value);
    setArea(value);
    setInstitution(value);
    setCatagory(value);
    setHours(value);
  };

  const setimgfile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const addRequirement = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("photo", file);
    formData.append("reqname", reqname);
    formData.append("area", area);
    formData.append("institution", institution);
    formData.append("catagory", catagory);
    formData.append("hours", hours);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      "http://localhost:3005/addrequirement",
      formData,
      config
    );
    console.log(res);
    if (res.statusText === "OK") {
      alert("Requirement successfully Added");
      navigate("/requirementdisplay");
    }
  };
  return (
    <div>
      <Navbardash/>
      <section className="vh-50">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <div
                className="card"
                style={{
                  borderRadius: "15px",
                  width: "100%",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Name of Requirement</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        onChange={(e) => setReqname(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Area</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <select
                        name="area"
                        onChange={(e) => setArea(e.target.value)}
                        style={{ width: "100%", height: "40px" }}
                      >
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
                      <h6 className="mb-0">Institution</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        onChange={(e) => setInstitution(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Category</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <select
                        name="catagory"
                        onChange={(e) => setCatagory(e.target.value)}
                        style={{ width: "100%", height: "40px" }}
                      >
                        <option>Retail</option>
                        <option>Academic</option>
                        <option>Corporate</option>
                        <option>Govt</option>
                        
                      </select>
                    </div>
                  </div>

                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Training Hours</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        onChange={(e) => setHours(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Upload File</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        className="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                        name="photo"
                        onChange={setimgfile}
                      />
                      <div className="small text-muted mt-2">
                        Upload your file.
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      onClick={addRequirement}
                    >
                      Add Requirement
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequirementForm;
