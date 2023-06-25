import SearchDogs from "./SearchDogs";
import Dog from "./Dog";
import NewDogForm from "./NewDogForm";
import {useEffect, useState} from 'react'
// import { useEffect } from "react";

function DogsList() {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then(r => r.json())
        .then(dogsData => setDogs(dogsData))
    }, [])

    const mappingDogs = dogs.map(d => {
        return <Dog dog={d} key={d.id}/>
    })
    return(
        <div>
            <SearchDogs />
            <div>{mappingDogs}</div>
            <NewDogForm />
        </div>
    )
}

export default DogsList;