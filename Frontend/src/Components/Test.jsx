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

      <div className='container curriculumlist' style={{width:'75%'}}>
      <div className="row curview">
  <h3 style={{marginLeft: '22rem', marginTop:'2%'}}>New Curriculum</h3> 
  <div className="col-12">
    <table className="table table-success table-striped curriculumtablelist">
      <thead>
        <tr className="bg-dark text-white currrow">
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
            <td className="col">{value.pdfpath}</td>
            <td className="col">
              <button className="btn btn-primary" onClick={downloadCurriculum}>DOWNLOAD</button>
            </td>
            <td className="col">
              <button className="btn btn-success" onClick={UpdateCurriculum}>APPROVE</button>
            </td>
            <td className="col">
              <button className="btn btn-danger" onClick={DeleteCurriculum}>REJECT</button>
            </td>
          </tr>
        })}
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


  )
}

export default CurriculumDisplay