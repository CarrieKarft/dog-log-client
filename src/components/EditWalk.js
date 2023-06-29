

function EditWalk({name, id , setClicked}) {
    return(
        // this will automatically populate with values entered for walk that is being edited
        <div>
               <div>
            <h2>Edit {name}'s' walk</h2>
            <form>          
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
            <button onClick={() => setClicked(false)}>Hide Edit Form</button>
        </div>
        </div>
    )
}

export default EditWalk;