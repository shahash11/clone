import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Home = () =>{
    const history = useHistory();
    const [users, setUsers] = useState([]);
    
    useEffect( ()=>{
        axios.get('http://localhost:5000/users')
        .then(res => {
            console.log(res)
            setUsers(res.data)
        }
        )

    }, [])


    
    return (<>
     <h1>Home Component after logging in </h1>
     {users.map((user)=>
     <p>{user._id} : {user.username}</p>
     )}

     <button onClick = {()=> history.push("/")}>Logout</button>
        </>)
}
export default Home;