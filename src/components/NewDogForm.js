import {useState} from 'react'

function NewDogForm({dogs, setDogs}) {
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
        fetch("http://localhost:9292/dogs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newDogObj),
          })
          .then(r => r.json())
          .then(newDog => setDogs([...dogs, newDog]))
    }

    return(
        <div className='newDogDiv'>
            <h2>Add A New Dog</h2>
            <form className="dogForm" onSubmit={e => handleSubmit(e)}>
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
                style={{margin: '1%', padding: '1%', height: '15%', width: '15%'}}
                type='submit'
                ></input>
            </form>
        </div>
    )
}


export default NewDogForm;