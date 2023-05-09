import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Search = () => {
  
   const [searchResult,setSearchResult]= useState([]) 
   const [key,setKey]=useState("")
   useEffect(()=>{
        const search =async ()=>{
            try{
                if(!key.trim()){
                    setSearchResult([])
                    return
                }
                const res = await axios.get("http://localhost:3005/curriculm",{params: {key,limit:5}})
                console.log(res)
            }catch(error){
                console.log(error)
            }
        }
        search()
   },[])

  return (
    <div className="container">
    <form>
        <div className="search-wrapper">
            <button className="search-btn">Search</button>
            <div className='form-group'>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Searching...'
                    value={key}
                    onChange={(e)=>setKey(e.target.value)}
                />
            </div>
        </div>
    </form>
    </div>
  )
}

export default Search