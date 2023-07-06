import DogInfo from "./DogInfo";
import EditWalk from "./EditWalk";
import NewWalkForm from "./NewWalkForm";
import Walk from "./Walk";
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'



function DogWalks({dogs, setDogs}) {
    // const [clicked, setClicked] = useState(false)
    const [currentDog, setCurrentDog] = useState()
    const {dog_id} = useParams()

    useEffect(() => {
        const findingDog = dogs.find(dog => dog.id == dog_id)
        setCurrentDog(findingDog)
    }, [dogs])

    if (!currentDog) return <h2>Loading...</h2>

 
    const {name, breed, age, walks} = currentDog

    function onUpdatingStateWithNewWalk(newWalkData) {

        const upNewWalks = [...currentDog.walks, newWalkData]
        const updatedCurrentDog = {...currentDog, walks: upNewWalks}
        setCurrentDog(updatedCurrentDog)

        const updatingDogsList = dogs.map(dog => dog.id === currentDog.id ? updatedCurrentDog : dog)
        setDogs(updatingDogsList)
    }  


    function handleDeleteClick(id) {
        fetch(`http://localhost:9292/walks/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => filteringDeletedWalk(id))
    }


    function filteringDeletedWalk(id) {
        const updatingWalks = walks.filter(walk => walk.id !== id)

        const updatedDog = {...currentDog, walks: updatingWalks}
        setCurrentDog(updatedDog)

        const mappingDogsToUpdate = dogs.map(dog => currentDog.id === dog.id ? updatedDog : dog)
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
        const updatedDog = {...currentDog, walks: mappingWalksToEdit}
        setCurrentDog(updatedDog)
        const mappingDogsToUpdate = dogs.map(dog => dog.id === currentDog.id ? updatedDog : dog)
        setDogs(mappingDogsToUpdate)
        console.log(mappingWalksToEdit)
    }

   
    
    const mappingWalks = walks.map(walk => {
        return <Walk key={walk.id} walk={walk} id={walk.id} name={name} dog_id={dog_id} handleDeleteClick={handleDeleteClick} onUpdatingWalks={onUpdatingWalks} />
    })

    return(
        <div >
            <div className="linkDiv">
                <Link to={'/dogs'}>Click to return to dogs</Link>
            </div>
            <DogInfo name={name} breed={breed} age={age}/>
            <h2 style={{color: 'white', fontSize: 'xx-large'}}>{name}'s Walks</h2>
            <div className="dogWalksDiv">
                <div className="walksContainer">
                    <div>{mappingWalks}</div>
                </div>
                <div className="wlakFormDiv">
                    <NewWalkForm name={name} dog_id={dog_id} dogs={dogs} onUpdatingStateWithNewWalk={onUpdatingStateWithNewWalk} /> 
                </div>
            </div>
            {/* hide element unless icon in Walk component clicked */}
        </div>
    )
}

export default DogWalks;