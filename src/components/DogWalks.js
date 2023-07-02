import DogInfo from "./DogInfo";
import EditWalk from "./EditWalk";
import NewWalkForm from "./NewWalkForm";
import Walk from "./Walk";
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'



function DogWalks({dogs, setDogs}) {
    // const [clicked, setClicked] = useState(false)
    const [currentDog, setCurrentDog] = useState({ walks:[] })
    const {dog_id} = useParams()

    useEffect(() => {
        const findingDog = dogs.find(dog => dog.id === parseInt(dog_id, 10))
        setCurrentDog(findingDog)
    }, [dogs])

    if (!currentDog) return <h2>Loading...</h2>

 
    const {name, breed, age, walks} = currentDog
    // console.log(currentDog.walks)  
        // console.log("before adding updated walk", currentDog)
    function onUpdatingStateWithNewWalk(newWalkData) {
        // console.log(newWalkData)
        const upNewWalks = [...currentDog.walks, newWalkData]
        currentDog.walks = upNewWalks
        setCurrentDog(currentDog)
        // console.log("after adding updated walk", currentDog)
        const currentDogsFilter = dogs.filter(dog => dog.id !== newWalkData.dog_id)
        const updatingDogsList = [...currentDogsFilter, currentDog]
        setDogs(updatingDogsList)
        // setDogs([...dogs, ...currentDog])
    }  


    function handleDeleteClick(id) {
        fetch(`http://localhost:9292/walks/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => filteringDeletedWalk(id))
    }
    // console.log("before updating", currentDog)

    function filteringDeletedWalk(id) {
        const updatingWalks = walks.filter(walk => walk.id !== id)
        // console.log(updatingWalks)
        currentDog.walks = updatingWalks
        setCurrentDog(currentDog)
        // console.log("after updating", currentDog)
        const mappingDogsToUpdate = dogs.map(dog => {
            if (dog.id === currentDog.id) return currentDog
            if (dog.id !== currentDog.id) return dog
        })
        // console.log("mapping dogs", mappingDogsToUpdate)
        setDogs(mappingDogsToUpdate)
    }

    function onUpdatingWalks(updatedWalk) {
        console.log(updatedWalk.id)
        const mappingWalksToEdit = walks.map(walk => {
            if (walk.id === updatedWalk.id) {
                return updatedWalk
            } else {
                return walk
            }
        })
        currentDog.walks = mappingWalksToEdit
        setCurrentDog(currentDog)
        const mappingDogsToUpdate = dogs.map(dog => {
            if (dog.id === currentDog.id) return currentDog
            if (dog.id !== currentDog.id) return dog
        })
        setDogs(mappingDogsToUpdate)
        console.log(mappingWalksToEdit)
        // setClicked(false)
    }

   
    
    const mappingWalks = walks.map(walk => {
        return <Walk key={walk.id} walk={walk} id={walk.id} name={name} dog_id={dog_id} handleDeleteClick={handleDeleteClick} onUpdatingWalks={onUpdatingWalks} />
    })

    return(
        <div>
            <div className="linkDiv">
                <Link to={'/dogs'}>Click to return to dogs</Link>
            </div>
            <DogInfo name={name} breed={breed} age={age}/>
            <div>
                <h2>{name}'s Walks</h2>
                <div>{mappingWalks}</div>
            </div>
            <NewWalkForm name={name} dog_id={dog_id} dogs={dogs} onUpdatingStateWithNewWalk={onUpdatingStateWithNewWalk} /> 
            {/* hide element unless icon in Walk component clicked */}
        </div>
    )
}

export default DogWalks;