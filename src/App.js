import {Switch, Route} from "react-router-dom";
import './App.css';
import TitleBanner from './components/TitleBanner';
import DogsList from './components/DogsList';
import DogWalks from './components/DogWalks';


function App() {
  return (
    <div className="App">
     <TitleBanner />
     <Switch>
      <Route exact path='/'>
        <DogsList />
      </Route>
      <Route path='/dogs'>
        <DogWalks />
      </Route>
     </Switch>
    </div>
  );
}

export default App;
