import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
	const [value, setValue] = useState(0);
	
	function decrementHandler(){
		setValue(value-1);
	}
		
	function incrementHandler(){
		setValue(value+1);
	}

	function resetHandler(){
		setValue(0);
	}

	return (
		<div className="App">
			<p className="heading">Increment & decrement</p>

			<div className="container">
				<button className="decrement" onClick={decrementHandler}>-</button>
				<div className="display">{value}</div>
				<button className="increment" onClick={incrementHandler}>+</button>
			</div>

			<button className="reset" onClick={resetHandler}>
				Reset
			</button>
		</div>
	);
}

export default App;
