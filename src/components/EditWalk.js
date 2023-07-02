import {useState} from 'react';

function EditWalk({name, id , setClicked, walk, onUpdatingWalks}) {
    const {location, used_bathroom, duration_in_minutes, distance_in_miles, medication_given, notes} = walk 
    const [walkLocation, setWalkLocation] = useState(location)
    const [walkLengthMinutes, setWalkLengtMinutes] = useState(duration_in_minutes)
    const [walkBathroom, setWalkBathroom] = useState(!!used_bathroom ? "1" : "0")
    const [walkMiles, setWalkMiles] = useState(distance_in_miles)
    const [walkMedication, setWalkMedication] = useState(!!medication_given ? "1" : "0")
    const [walkNotes, setWalkNotes] = useState(notes)
    // console.log(id)

    function handleEditWalksubmit(e) {
        e.preventDefault()
        console.log(id)
        const editWalkObj = {
            location: walkLocation,
            used_bathroom: parseInt(walkBathroom, 10),
            duration_in_minutes: parseInt(walkLengthMinutes, 10),
            distance_in_miles: parseFloat(walkMiles),
            medication_given: parseInt(walkMedication, 10),
            notes: walkNotes
        }
        console.log(editWalkObj)
        fetch(`http://localhost:9292/walks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editWalkObj),
        })
        .then(r => r.json())
        .then(onUpdatingWalks)
        setClicked(false)
    }


    // function handleUpdatingWalks(updatedWalk) {

    // }

    return(
        <div>
               <div>
            <h2>Edit {name}'s' walk</h2>
            <form onSubmit={e => handleEditWalksubmit(e)}>          
                <label>Where did you walk?&nbsp;
                    <input 
                    type="text"
                    value={walkLocation}
                    onChange={e => setWalkLocation(e.target.value)}
                    ></input>
                </label>
                <label>Did {name} do their buisness?&nbsp;
                    <select 
                    value={walkBathroom}
                    onChange={e => setWalkBathroom(e.target.value)}>
                        <option value="1">YES</option>
                        <option value="0">NO</option>
                    </select>
                </label>
                <label>How long was your walk in minutes?&nbsp;
                    <input 
                    type="text"
                    value={walkLengthMinutes}
                    onChange={e => setWalkLengtMinutes(e.target.value)}
                    ></input>
                </label>
                <label>How many miles did you walk?&nbsp;
                    <input 
                    type="text"
                    value={walkMiles}
                    onChange={e => setWalkMiles(e.target.value)}
                    ></input>
                </label>
                <label>Did {name} recieve any medication?&nbsp;
                    <select 
                    type="select"
                    value={walkMedication}
                    onChange={e => setWalkMedication(e.target.value)}
                    >
                        <option value="1">YES</option>
                        <option value="0">NO</option>
                    </select>
                </label>
                <label>Any additional notes?&nbsp;
                    <textarea 
                    type="text"
                    value={walkNotes}
                    onChange={e => setWalkNotes(e.target.value)}
                    ></textarea>
                </label>
                <input type="submit"></input>
            </form>
            <button onClick={() => setClicked(false)}>Hide Edit Form</button>
        </div>
        </div>
    )
}

export default EditWalk;