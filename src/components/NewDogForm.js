

function NewDogForm() {
    return(
        <form>
            <label>Dog Name
                <input type="text"></input>
            </label>
            <label>Dog Breed
                <input type="text"></input>
            </label>
            <label>Dog Age
                <input type="text"></input>
            </label>
            <label>Energy Level
                <select>
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                </select>
            </label>
            <label>Medication Needed?
                <input type="text"></input>
            </label>
            <input
            type='submit'
            ></input>
        </form>
    )
}


export default NewDogForm;