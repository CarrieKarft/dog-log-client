import {useState} from 'react'

function NewWalkForm({name, onUpdatingStateWithNewWalk, dog_id}) {
    // const {location, used_bathroom, distance_in_miles, duration_in_minutes, medication_given, notes} = newWalkFormInfo
    const [walkLocation, setWalkLocation] = useState("")
    const [walkLengthMinutes, setWalkLengtMinutes] = useState("")
    const [walkBathroom, setWalkBathroom] = useState("1")
    const [walkMiles, setWalkMiles] = useState("")
    const [walkMedication, setWalkMedication] = useState("1")
    const [walkNotes, setWalkNotes] = useState("")


    function onHandleWalkSubmit(e) {
        e.preventDefault()
        const newWalkObj = {
            location: walkLocation,
            used_bathroom: parseInt(walkBathroom, 10),
            duration_in_minutes: parseInt(walkLengthMinutes, 10),
            distance_in_miles: parseFloat(walkMiles),
            medication_given: parseInt(walkMedication, 10),
            notes: walkNotes,
            dog_id: dog_id
        }
        console.log(newWalkObj)
        fetch("http://localhost:9292/walks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newWalkObj),
          })
          .then(r => r.json())
          .then(onUpdatingStateWithNewWalk)
          setWalkLengtMinutes("")
          setWalkLocation("")
          setWalkBathroom("1")
          setWalkMedication("1")
          setWalkMiles("")
          setWalkNotes("")
    }

    return(
        <div>
            <h2>Time To Walk {name}!</h2>
            <form onSubmit={e => onHandleWalkSubmit(e)}>
                <label>Where did you walk?&nbsp;
                    <input 
                    type="text"
                    value={walkLocation}
                    onChange={e => setWalkLocation(e.target.value)}
        
                    ></input>
                </label>
                <label>Did {name} do their buisness?&nbsp;
                    <select type="select" value={walkBathroom} onChange={e => setWalkBathroom(e.target.value)}>
                        <option defaultValue="1">YES</option>
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
                    <select type="select" value={walkMedication} onChange={e => setWalkMedication(e.target.value)}>
                        <option defaultValue="1" >YES</option>
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
        </div>
    )
}

//   t.string "location"
// t.boolean "used_bathroom"
// t.integer "duration_in_minutes"
// t.float "distance_in_miles"
// t.boolean "medication_given"
// t.string "notes"
// t.integer "dog_id"


export default NewWalkForm;