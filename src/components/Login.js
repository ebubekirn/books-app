import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    // const navigate = useNavigate(); 
    // Api den user çek
    const [user, setUser] = useState({
        "id": 0,
        "name": "",
        "role": ""
    })

    const [loggedin, setLoggedin] = useState(false);

    const rtnUser = {
        "id": 1,
        "name": "ali@info.com",
        "role": "user"
    }

    useEffect(() => {
        if (rtnUser != null) {
            setUser(rtnUser)
            setLoggedin(true)
            // const myJSON = JSON.stringify(xxx)
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("loggedin", JSON.stringify(loggedin));
            // navigate("/");
        }
    },[loggedin])

    return (
        <div>Login</div>
    )
}
