import React, { useEffect, useState }from 'react'
import axios from "axios"

const Dashboard = () => {
    const [projects, setProjects] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/projects`)
        .then(res=>setProjects(res.data))
        .catch(err=>console.log(err))
    },[])

    return (
        <fieldset>
            <legend> Dashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th> Title</th>
                        <th> Price</th>
                        <th> Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects && 
                            projects.map((project, i)=>(
                                <tr key={i}>
                                    <td>{project.title}</td>
                                    <td>{project.price}</td>
                                    <td>{project.description}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard