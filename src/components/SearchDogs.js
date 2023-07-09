

function SearchDogs({searchDog, setSearchDog}) {

    return(
        <form style={{color: 'white', fontSize: 'x-large'}}>
            <label>Seach for dogs by name&nbsp;    
                <input 
                type='text'
                value={searchDog} 
                onChange={e => setSearchDog(e.target.value)}
                ></input>
            </label>
        </form>
    )
}


export default SearchDogs;