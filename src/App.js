import './App.css';
import IncDecByOneCounter from './components/incrementDecrementCounter';
import DisplayCounter from './components/displayCounter';


function App(props) {
  return (
    <div className="App">
      <h1>App</h1>     
      <IncDecByOneCounter />
      <DisplayCounter />
  

    </div>
  );
}



export default App;
