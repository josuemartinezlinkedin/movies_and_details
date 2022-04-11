// importing 2 important react hooks from react
import {useState, useEffect} from 'react' //importing set state react hook
// import './App.css';

// Props practice and jsx syntax
const Person = (props) => {
  return (
  <div>
<h1>Name: {props.name}</h1>
<h2>ohh your name is {props.name}, is it...</h2>
<h3>well, how are you?</h3>
<h4>I see it says {props.lastName} on your name tag</h4>
<h4>hmmm, and you wouldn't also happen to be {props.age} would you?</h4>
</div>
  )
};
// created variable to do some inline styling
var styles2 = {
  margin: '20px',
  width: '250px',
  height: '250px',
  backgroundColor: 'blue',
  display: 'inline-block',
  color: 'yellow'
};

// practice with main funcion App
const App = () => { 
  // EX: using useState, stateVariable: counter, setterFunction: setCounter
  const [counter, setCounter] = useState(0)  
  const name = 'josh';
  //another variable for inline stying showing it can be 
  //in or outside of a function/component
  var styles1 = {
    margin: '20px',
    width: '250px',
    height: '250px',
    backgroundColor: 'yellow',
    display: 'inline-block',
    color: 'red'
  };
// useEffect demonstrated 3 different ways
//A. on every effect, no dependency array argument passed, therefor
// will send alert for all clicks being handled and page refreshes
  useEffect(()=> {
    alert('something is happening haha')
  });
//B. included second argument for useEffect and passed an empty array
// alerts on initial launch of function/component like refreshing page
  useEffect(()=> {alert('im independent and free... unless you refresh .-.')
}, [])
//C. passing in state variable into dependency array
// alerts whenever a change happens to counter
  useEffect(() => { alert('counter has changed to '+ counter)}, [counter]
  );
   
  // if name exists then jsx syntax to display elements
  // included event handler onClick to use setter function and change state
  // of counter
  // also in p tags we have inline styling
  // Then we have Person Component and accessing props to pass in values
  // props for strings no {} needed but for code or integer then needed
  return ( 
    < div>
      {name ? (
        <div>
          <button onClick={() => alert('go ahead and keep clicking me dear') }>alert</button>
          <h1>{counter}</h1>
          <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>plus +</button>
          <button onClick={() => setCounter((prevCounter) => prevCounter -1)}>minus -</button>
          <button onClick={() => setCounter(0)}>reset</button>
          <button onClick={() => setCounter((prevCounter) => prevCounter / 2 )}>division by 2 /</button>
          <p style={styles1}>testing 123 testing 123</p>
          <p style={styles2}>whoa there</p>
      <Person name='deeznuts' lastName='twentyone' age={21}/> 
        </div>
      ) : (
        <>
            <h1>There is no name</h1>
            <h1>Oh OH oh</h1>
        </>
        
      )
      }
    </div>
  );
}

export default App;
