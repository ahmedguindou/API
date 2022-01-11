import CardList from "./CardList"
import React,{useEffect,useState} from 'react'
import  axios  from "axios"

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(res=>setUsers(res.data))
       .catch((err)=>console.log(err))
    }, [])
    return (
        <div className = "list">
            {users.map (user=><CardList user={user}/>)}
        </div>
    )
}
export default UserList 