

function DogInfo({name, breed, age}) {
    return(
        <div style={{color: 'white', fontSize: 'larger', borderStyle: 'solid', borderColor: 'white', borderWidth: '2px', borderRadius: '25px', margin: '5%'}}>
            <h2 >Dog Info</h2>
            <div className="dogInfoDiv">
                <h3>Name: {name}</h3>
                <h3>Breed: {breed}</h3>
                <h3>Age: {age}</h3>
            </div>
        </div>
    )
}


export default DogInfo;