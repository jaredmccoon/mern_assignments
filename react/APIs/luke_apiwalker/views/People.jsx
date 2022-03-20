import React, { useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'


const People = () => {
    const {id} = useParams()
    const [people, setPeople] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res=>{
                console.log(res.data)
                setPeople(res.data)
            })
            .catch(err=> console.log(err))
    },[id])

    return (
        <fieldset>
            <legend> Person.jsx</legend>
            {
                people?
                    <div>
                        <h1>name: {people.name}</h1>
                        <h4>Height: {people.height}</h4>
                        <h4>Eye color: {people.eye_color}</h4>
                        <h4>Gender: {people.gender}</h4>
                    </div>:
                    <h1>none</h1>
            }
        </fieldset>
    )
}

export default People