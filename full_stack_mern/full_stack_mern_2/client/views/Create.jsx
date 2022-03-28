import React, {useState, useEffect }from 'react'
import axios from "axios"
import {useHistory, Link} from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescrition] = useState("")
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/projects`,{title, price, description})
        .then(res=>{
            history.push("/projects")
        })
        .catch(err=>console.log(err))
    }

    const [projects, setProjects] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/projects`)
        .then(res=>setProjects(res.data))
        .catch(err=>console.log(err))
    },[])


    return (  
        <>
        <fieldset>
            <legend> Create.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title</label>
                    <input type="text" name="title" value={title}
                        onChange={e=>setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label> price</label>
                    <input type="number" min="1" step="any" name="price" value={price}
                        onChange={e=>setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label> Description</label>
                    <input type="text" name="description" value={description}
                        onChange={e=>setDescrition(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </fieldset>
        <hr></hr>
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
                                <tr key={i} >
                                    <td> <Link to={`/projects/${project._id}`}>{project.title}</Link></td>
                                    <td> {project.price}</td>
                                    <td>{project.description}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </fieldset>
        </>
    );
}

export default Create;