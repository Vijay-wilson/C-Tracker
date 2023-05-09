import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Admin from './Components/Admindashboard/Admin';
import User from './Components/Userdashboard/User';
import Profile from './Components/Profile/Profile';
import Aprofile from './Components/Profile/Aprofile';

import RecieveReqrmnt from './Components/Userdashboard/Requirement/RecieveReqrmnt';
import Search from './Components/Search/Search';
import CurriculumDisplay from './Components/Curriculum/CurriculumDisplay';
import ViewCurriculm from './Components/ViewAll_curriculm/ViewCurriculm';
import ViewallFaculty from './Components/ViewAll_curriculm/ViewallFaculty';
import RequirementForm from './Components/RequirementForm/RequirementForm';
import UploadFile from './Components/Userdashboard/FileUplod/UploadFile';
import RequirementDisplay from './Components/RequirementForm/RequirementDisplay';
import Editform from './Components/RequirementForm/Editform';
import Searchbar from './Components/Searchbar/Searchbar';

import UpdMySubmission from './Components/ViewAll_curriculm/UpdMySubmission';
import ViewMySubmission from './Components/ViewAll_curriculm/ViewMySubmission';
import Searchcurriculum from './Components/Searchbar/Searchcurriculum';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
      
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/searchcurriculum' exact element={<Searchcurriculum/>} />
        <Route path='/searchbar' exact element={<Searchbar/>} />

        
        <Route path='/admin' exact element={<Admin />} />
        <Route path='/aprofile' exact element={<Aprofile />} />
        <Route path='/curriculumdisplay' exact element={<CurriculumDisplay/>} />
        <Route path='/viewcurriculm' exact element={<ViewCurriculm/>} />
        <Route path='/requirement' exact element={<RequirementForm/>} />
        <Route path='/requirementdisplay' exact element={<RequirementDisplay/>} />
        <Route path="/updateRequirements/:id" element={<Editform/>}></Route>


        <Route path='/user' exact element={<User />} />
        <Route path='/uprofile' exact element={<Profile />} />
        <Route path='/recvrqrmnt' exact element={<RecieveReqrmnt/>} />
        <Route path='/viewallfaculty' exact element={<ViewallFaculty/>} />
        <Route path='/uploadfile' exact element ={<UploadFile/>}/>


         <Route path='/viewmysubmission' exact element={<ViewMySubmission/>} />
         {/* <Route path='/updMysubmission/:id' exact element={<UploadFile/>} /> */}
        <Route path='/updMysubmission/:id' exact element={<UpdMySubmission/>} />  

      </Routes>
    </BrowserRouter>
  );
}

export default App;
