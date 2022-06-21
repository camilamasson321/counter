
import React, { useState, useEffect } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Dcounter = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		// Update the document title using the browser API
		const myTimeout = setTimeout(myGreeting, 1000);
		console.log("count###",count);
	  });

	  function myGreeting() {
		// document.getElementById("demo").innerHTML = "Happy Birthday!"
		setCount(count + 1)
	  }

	return (
		<div>
		  <p>You clicked {count} times</p>
		  <button onClick={() => setCount(count + 1)}>
			Click me
		  </button>
		  <p id="demo"></p>
		</div>
	  );
};

export default Dcounter;


// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }