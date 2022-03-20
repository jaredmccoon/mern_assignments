import React, { useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'


const Planet = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res=>{
                console.log(res.data)
                setPlanet(res.data)
            })
            .catch(err=> console.log(err))
    },[id])

    return (
        <fieldset>
            <legend> Person.jsx</legend>
            {
                planet?
                    <div>
                        <h1>name: {planet.name}</h1>
                        <h4>Population: {planet.population}</h4>
                        <h4>terrain: {planet.terrain}</h4>
                        <h4>surface water: {planet.surface_water}</h4>
                    </div>:
                    <h1>none</h1>
            }
        </fieldset>
    )
}

export default Planet