import EditWalk from "./EditWalk";

function Walk({walk}) {
    return(
        <div>
            {/* maybe render EditWalk in Walk? */}
            <p>Location: {walk.location}</p>
            <p>Bathroom: {!!walk.used_bathroom ? "Yes" : "No"}</p>
            <p>Duration in minutes: {walk.duration_in_minutes}</p>
            <p>Distance in miles: {walk.distance_in_miles}</p>
            <p>Medication: {!!walk.medication_given ? "Yes" : "No"}</p>
            <p>Notes: {walk.notes}</p>

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