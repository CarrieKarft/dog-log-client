import {Routes, Route} from "react-router-dom";
import './App.css';
import './index.css';
import {dog_walk_image} from './dog_walk_image.avif'
import TitleBanner from './components/TitleBanner';
import DogsList from './components/DogsList';
import DogWalks from './components/DogWalks';
import {useEffect, useState} from 'react'


function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
    .then(r => r.json())
    .then(dogsData => setDogs(dogsData))
  }, [])
  console.log(dogs)

  // if (!dogs) return <h2>Loading...</h2>

  return (
    <div className="App">
     <TitleBanner />
     <Routes>
      <Route path='/dogs' element={ <DogsList dogs={dogs} setDogs={setDogs}/>} />
        {/* <DogsList dogs={dogs} setDogs={setDogs}/> */}
      {/* </Route> */}
      <Route path='/dogs/:dog_id/walks' element={<DogWalks dogs={dogs} setDogs={setDogs}/>} />
        {/* <DogWalks dogs={dogs} setDogs={setDogs}/> */}
      {/* </Route> */}
     </Routes>
    </div>
  );
}

export default App;
