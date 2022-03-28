
import React, { useEffect, useState} from 'react'
import axios from 'axios'

const Message = () => {
    const [message, setMessage] = useState()
    useEffect(()=>(
        axios.get(`http://localhost:8000/api/message`)
        .then(res=>setMessage(res.data))
        .catch(err=>console.log(err))
    ),[])

    return (
    <fieldset>
        <legend> OneProject.jsx</legend>
        <h1>Message: {message && message.message}</h1>
    </fieldset>
    )
}

export default Message