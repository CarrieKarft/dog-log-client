import {Link} from 'react-router-dom';


function Dog({dog, id}) {

    return(
        <div className="dogDiv">
            <h3>Name: {dog.name}</h3>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <p>Energy Level: {dog.energy_level}</p>
            <p>Needs Medication: {dog.medication}</p>
            <div className='linkDiv'>
                <Link to={`/dogs/${id}/walks`}>Click to view {dog.name}'s walks</Link>
            </div>
        </div>
    )
}


export default Dog;