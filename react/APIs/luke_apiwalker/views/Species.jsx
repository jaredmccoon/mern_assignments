import React, { useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'

const Species = () => {
    const {id} = useParams()
    const [species, setSpecies] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/species/${id}`)
            .then(res=>{
                setSpecies(res.data)
            })
            .catch(err=> console.log(err))
    },[id])

    return (
        <fieldset>
            <legend> Person.jsx</legend>
            {
                species?
                    <div>
                        <h1>name: {species.name}</h1>
                        <h4>language: {species.language}</h4>
                        <h4>classification: {species.classification}</h4>
                        <h4>designation: {species.designation}</h4>
                    </div>:
                    <h1>none</h1>
            }
        </fieldset>
    )
}

export default Species