

function EditWalk() {
    return(
        // this will automatically populate with values entered for walk that is being edited
        <div>
               <div>
            <h2>Edit NAME'S walk</h2>
            <form>
                {/* maybe have this taken care of automatically in post requst? */}
            <label>Who did you walk?&nbsp;
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </label>
                <label>Where did you walk?&nbsp;
                    <input type="text"></input>
                </label>
                <label>Did NAME do their buisness?&nbsp;
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
                <label>Did NAME recieve any medication?&nbsp;
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
        </div>
    )
}

export default EditWalk;