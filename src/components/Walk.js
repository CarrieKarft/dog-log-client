import EditWalk from "./EditWalk";

function Walk({walk, id, handleDeleteClick}) {
    const {location, used_bathroom, duration_in_minutes, distance_in_miles, medication_given, notes} = walk



    return(
        <div>
            {/* maybe render EditWalk in Walk? */}
            <p>Location: {location}</p>
            <p>Bathroom: {!!used_bathroom ? "Yes" : "No"}</p>
            <p>Duration in minutes: {duration_in_minutes}</p>
            <p>Distance in miles: {distance_in_miles}</p>
            <p>Medication: {!!medication_given ? "Yes" : "No"}</p>
            <p>Notes: {notes}</p>
            <div className="walkButtons">
                <button>Edit Walk</button>
                <button onClick={() => handleDeleteClick(id)}>Delete Walk</button>
            </div>

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


export default Walk;