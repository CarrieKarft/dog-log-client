import EditWalk from "./EditWalk";
import {useState} from 'react';

function Walk({walk, id, handleDeleteClick, name, onUpdatingWalks}) {
    const [clicked, setClicked] = useState(false)
    const {location, used_bathroom, duration_in_minutes, distance_in_miles, medication_given, notes} = walk

    function hadleEditClick() {
        setClicked(true)
    }


    return(
        <div className="walk">
            <p>Location: {location}</p>
            <p>Bathroom: {!!used_bathroom ? "Yes" : "No"}</p>
            <p>Duration in minutes: {duration_in_minutes}</p>
            <p>Distance in miles: {distance_in_miles}</p>
            <p>Medication: {!!medication_given ? "Yes" : "No"}</p>
            <p>Notes: {notes}</p>
            <div className="walkButtons">
                <button onClick={() => {
                    hadleEditClick()
                    }}>Edit Walk</button>
                <button onClick={() => handleDeleteClick(id)}>Delete Walk</button>
            </div>
            <div  style={{display: clicked ? null : "none"}}>
            <EditWalk name={name} id={id} walk={walk} setClicked={setClicked} onUpdatingWalks={onUpdatingWalks} />
            </div>
        </div>
    )
}


export default Walk;