import DogInfo from "./DogInfo";
import EditWalk from "./EditWalk";
import NewWalkForm from "./NewWalkForm";
import Walk from "./Walk";
import {useState, useEffect} from 'react'



function DogWalks() {
    const [walks, setWalks] = useState([])
    const id = 1

    useEffect(() => {
        fetch(`http://localhost:9292/dogs/${id}/walks`)
        .then(r => r.json())
        .then(walkData => setWalks(walkData))
    }, [])

    console.log(walks)
    const mappingWalks = walks.map(walk => {
        return <Walk key={walk.id} walk={walk}/>
    })


    return(
        <div>
            <DogInfo />
            <div>{mappingWalks}</div>
            <NewWalkForm />
            {/* hide element unless icon in Walk component clicked */}
            <EditWalk />
        </div>
    )
}

export default DogWalks;