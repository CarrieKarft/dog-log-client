import DogInfo from "./DogInfo";
import EditWalk from "./EditWalk";
import NewWalkForm from "./NewWalkForm";
import Walk from "./Walk";
import {useState, useEffect} from 'react'



function DogWalks() {
    const [dogWalks, setDogWalks] = useState(null)
    const id = 2

    useEffect(() => {
        fetch(`http://localhost:9292/dogs/${id}/walks`)
        .then(r => r.json())
        .then(dogWalkData => setDogWalks(dogWalkData))
   
    }, [id])

    if (!dogWalks) return <h2>Loading...</h2>

    const {name, breed, age, walks} = dogWalks
   
    
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
            <NewWalkForm />
            {/* hide element unless icon in Walk component clicked */}
            <EditWalk />
        </div>
    )
}

export default DogWalks;