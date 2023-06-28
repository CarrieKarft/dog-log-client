import DogInfo from "./DogInfo";
import EditWalk from "./EditWalk";
import NewWalkForm from "./NewWalkForm";
import Walk from "./Walk";
import {useState, useEffect} from 'react'



function DogWalks() {
    const [dogWalks, setDogWalks] = useState(null)
    const [walks, setWalks] = useState([])
    const id = 3

    useEffect(() => {
        fetch(`http://localhost:9292/dogs/${id}/walks`)
        .then(r => r.json())
        .then(dogWalkData => {
            setDogWalks(dogWalkData)
            setWalks(dogWalkData.walks)
        })
   
    }, [id])

    if (!dogWalks) return <h2>Loading...</h2>
    if (!walks) return <h2>Loading...</h2>

    const {name, breed, age} = dogWalks
   
    
    const mappingWalks = walks.map(walk => {
        return <Walk key={walk.id} walk={walk} />
    })

    return(
        <div>
            <DogInfo name={name} breed={breed} age={age}/>
            <div>
                <h2>{name}'s Walks</h2>
                <div>{mappingWalks}</div>
            </div>
            <NewWalkForm name={name} id={dogWalks.id} walks={walks} setWalks={setWalks}/>
            {/* hide element unless icon in Walk component clicked */}
            <EditWalk name={name} id={dogWalks.id}/>
        </div>
    )
}

export default DogWalks;