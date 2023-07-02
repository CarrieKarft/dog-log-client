import SearchDogs from "./SearchDogs";
import Dog from "./Dog";
import NewDogForm from "./NewDogForm";
import {useEffect, useState} from 'react'


function DogsList({dogs, setDogs}) {
    // const [dogs, setDogs] = useState([])
    const [searchDog, setSearchDog] = useState("")
    // console.log(searchDog)

    // useEffect(() => {
    //     fetch("http://localhost:9292/dogs")
    //     .then(r => r.json())
    //     .then(dogsData => setDogs(dogsData))
    // }, [])

    // function onHandleSearchSubmit(e) {
    //     e.preventDefault()
        console.log(searchDog)
        const searchDogFilter = dogs.filter(dog => {
            if (dog.name.includes(searchDog)) {
                return dog
            }
        })
        console.log(searchDogFilter)

    // }


    const mappingDogs = searchDogFilter.map(d => {
        return <Dog dog={d} key={d.id} id={d.id}/>
    })
    return(
        <div>
            <SearchDogs searchDog={searchDog} setSearchDog={setSearchDog} />
            <div>{mappingDogs}</div>
            <NewDogForm dogs={dogs} setDogs={setDogs}/>
        </div>
    )
}

export default DogsList;