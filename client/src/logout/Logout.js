import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    
    const history = useHistory();

    useEffect( () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        history.push("/");
    })

    return(
        <></>
    )
}

export default Logout;