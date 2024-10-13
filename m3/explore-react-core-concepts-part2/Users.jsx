
// useEffect use to handle sideEffect(on which code is ok but I have no control), useEffect needs two things call back function & dependencies

import { useEffect, useState } from "react"

export default function Users(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    
    return(
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}