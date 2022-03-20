import React, { useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'

const Starship = () => {
    const {id} = useParams()
    const [starship, setStarship] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res=>{
                setStarship(res.data)
            })
            .catch(err=> console.log(err))
    },[id])

    return (
        <fieldset>
            <legend> Person.jsx</legend>
            {
                starship?
                    <div>
                        <h1>name: {starship.name}</h1>
                    </div>:
                    <h1>none</h1>
            }
        </fieldset>
    )
}

export default Starship