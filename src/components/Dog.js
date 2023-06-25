
function Dog({dog}) {
//   console.log(dog.medication)

    return(
        <div className="dogDiv">
            <h3>Name: {dog.name}</h3>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <p>Energy Level: {dog.energy_level}</p>
            <p>Needs Medication: {dog.medication}</p>
        </div>
    )
}


export default Dog;