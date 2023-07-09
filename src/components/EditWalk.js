import {useState} from 'react';

function EditWalk({name, id , setClicked, walk, onUpdatingWalks}) {
    const {location, used_bathroom, duration_in_minutes, distance_in_miles, medication_given, notes} = walk 
    const [walkLocation, setWalkLocation] = useState(location)
    const [walkLengthMinutes, setWalkLengtMinutes] = useState(duration_in_minutes)
    const [walkBathroom, setWalkBathroom] = useState(!!used_bathroom ? "true" : "false")
    const [walkMiles, setWalkMiles] = useState(distance_in_miles)
    const [walkMedication, setWalkMedication] = useState(!!medication_given ? "true" : "false")
    const [walkNotes, setWalkNotes] = useState(notes)

    function handleEditWalksubmit(e) {
        e.preventDefault()
        console.log(id)
        const editWalkObj = {
            location: walkLocation,
            used_bathroom: JSON.parse(walkBathroom),
            duration_in_minutes: parseInt(walkLengthMinutes, 10),
            distance_in_miles: parseFloat(walkMiles),
            medication_given: JSON.parse(walkMedication),
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


    return(
        <div style={{borderTopWidth: '2px', borderTopColor: 'white', borderTopStyle: 'solid', marginTop: '5%'}}>
            <h2>Edit {name}'s' walk</h2>
            <form onSubmit={e => handleEditWalksubmit(e)}>          
                <label>Where did you walk?&nbsp;
                    <input 
                    type="text"
                    value={walkLocation}
                    onChange={e => setWalkLocation(e.target.value)}
                    ></input>
                </label><br></br>
                <label>Did {name} do their buisness?&nbsp;
                    <select 
                    value={walkBathroom}
                    onChange={e => setWalkBathroom(e.target.value)}>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>
                </label><br></br>
                <label>How long was your walk in minutes?&nbsp;
                    <input 
                    type="text"
                    value={walkLengthMinutes}
                    onChange={e => setWalkLengtMinutes(e.target.value)}
                    ></input>
                </label><br></br>
                <label>How many miles did you walk?&nbsp;
                    <input 
                    type="text"
                    value={walkMiles}
                    onChange={e => setWalkMiles(e.target.value)}
                    ></input>
                </label><br></br>
                <label>Did {name} recieve any medication?&nbsp;
                    <select 
                    type="select"
                    value={walkMedication}
                    onChange={e => setWalkMedication(e.target.value)}
                    >
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>
                </label><br></br>
                <label>Any additional notes?&nbsp;
                    <textarea 
                    type="text"
                    value={walkNotes}
                    onChange={e => setWalkNotes(e.target.value)}
                    ></textarea>
                </label><br></br>
                <input type="submit"></input>
            </form>
            <button onClick={() => setClicked(false)}>Hide Edit Form</button>
        </div>
    )
}

export default EditWalk;