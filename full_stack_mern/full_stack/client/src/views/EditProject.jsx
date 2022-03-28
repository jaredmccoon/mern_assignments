import React, { useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from "axios"

const EditProject = () => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects/${id}`)
        .then(res=>{
            const project = res.data
            setTitle(project.title)
            setPrice(project.price)
            setDescription(project.description)
        })
        .catch(err=> console.log(err))
    }, [id])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/projects/${id}`,{title, price, description})
        .then(res=>{
            history.push("/projects")
        })
        .catch(err=>console.log(err))
    }


    return (
        <fieldset>
            <legend> EditProject.jsx</legend>
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
                        onChange={e=>setDescription(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default EditProject