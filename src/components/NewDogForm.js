import {useState} from 'react'

function NewDogForm() {
    const [dogName, setDogName] = useState("")
    const [dogAge, setDogAge] = useState("")
    const [dogBreed, setDogBreed] = useState("")
    const [dogEnergyLevel, setDogEnergyLevel] = useState("")
    const [dogMedication, setDogMedication] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const newDogObj = {
            name: dogName,
            breed: dogBreed,
            age: parseInt(dogAge, 10),
            energy_level: dogEnergyLevel,
            medication: dogMedication
        }
        console.log(newDogObj)
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <label>Dog Name
                <input 
                type="text"
                value={dogName}
                onChange={e => setDogName(e.target.value)}
                ></input>
            </label>
            <label>Dog Breed
                <input 
                type="text"
                value={dogBreed}
                onChange={e => setDogBreed(e.target.value)}
                ></input>
            </label>
            <label>Dog Age
                <input 
                type="text"
                value={dogAge}
                onChange={e => setDogAge(e.target.value)}
                ></input>
            </label>
            <label>Energy Level
                <select type="select" value={dogEnergyLevel} onChange={e => setDogEnergyLevel(e.target.value)}>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
            </label>
            <label>Medication Needed?
                <input 
                type="text"
                value={dogMedication}
                onChange={e => setDogMedication(e.target.value)}
                ></input>
            </label>
            <input
            type='submit'
            ></input>
        </form>
    )
}


export default NewDogForm;