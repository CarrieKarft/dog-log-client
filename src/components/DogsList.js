import SearchDogs from "./SearchDogs";
import Dog from "./Dog";
import NewDogForm from "./NewDogForm";
import {useState} from 'react'


function DogsList({dogs, setDogs}) {
    const [searchDog, setSearchDog] = useState("")

        console.log(searchDog)
        const searchDogFilter = dogs.filter(dog => {
            if (dog.name.includes(searchDog)) {
                return dog
            }
        })
        console.log(searchDogFilter)

    const mappingDogs = searchDogFilter.map(d => {
        return <Dog dog={d} key={d.id} id={d.id}/>
    })
    return(
        <div>
            <SearchDogs searchDog={searchDog} setSearchDog={setSearchDog} />
            <div className="dogsContainer">{mappingDogs}</div>
            <NewDogForm dogs={dogs} setDogs={setDogs}/>
        </div>
    )
}

export default DogsList;