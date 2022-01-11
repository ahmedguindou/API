import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function Details() {
    const {id}=useParams()
    console.log(id)
    const [user, setUser] = useState({})
    const [loading, setloading]=useState(true)
    const navigate = useNavigate();

    useEffect((id) => {
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      
       .then(res=>setUser(res.data))
       .then (res=> setloading(false))
       .catch((err)=>console.log(err))
    }, [])
    console.log(user)
    return (
        <div  style={{color:"black"}}  >
           {loading ? <h1>Wait</h1> :  
           
           <>
           <h1>{user.name}</h1>
           <h1>{user.email}</h1>
           <h1>{user.phone}</h1>

           <button onClick={() => navigate(-1)}>go back</button>
          </>}
         
        </div>
    )
}

export default Details
