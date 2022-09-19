
import './App.scss';
import Zuikiai from './Components/Zuikiai';
import Props from './Components/Props';




function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>“LABAS, ZUIKI!”</h1>
    <Zuikiai spalva="pink" darVienas='3'/>
    <Props textas="Laba diena Lietuva"/>
    



   
      </header>
    </div>
  );
}

export default App;
