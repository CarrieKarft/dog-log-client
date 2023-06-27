

function NewWalkForm({name}) {
    return(
        <div>
            <h2>Time To Walk {name}!</h2>
            <form>
                {/* maybe have this taken care of automatically in post requst? */}
            {/* <label>Who did you walk?&nbsp;
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </label> */}
                <label>Where did you walk?&nbsp;
                    <input type="text"></input>
                </label>
                <label>Did {name} do their buisness?&nbsp;
                    <select>
                        <option>YES</option>
                        <option>NO</option>
                    </select>
                </label>
                <label>How long was your walk in minutes?&nbsp;
                    <input type="text"></input>
                </label>
                <label>How many miles did you walk?&nbsp;
                    <input type="text"></input>
                </label>
                <label>Did {name} recieve any medication?&nbsp;
                    <select>
                        <option>N/A</option>
                        <option>YES</option>
                        <option>NO</option>
                    </select>
                </label>
                <label>Any additional notes?&nbsp;
                    <textarea type="text"></textarea>
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