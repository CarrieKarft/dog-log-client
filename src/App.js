import {Switch, Route} from "react-router-dom";
import './App.css';
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
     <Switch>
      <Route exact path='/dogs'>
        <DogsList dogs={dogs} setDogs={setDogs}/>
      </Route>
      <Route path='/dogs/:dog_id/walks'>
        <DogWalks dogs={dogs} setDogs={setDogs}/>
      </Route>
     </Switch>
    </div>
  );
}

export default App;
