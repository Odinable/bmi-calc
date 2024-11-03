import React, {useState} from 'react';
import './App.css';

function App() {

  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [message, setmessage] = useState('');

  // logic

  let calcbmi = (Event) => {

    event.preventDefault()

    // logic for bmi

    if (weight===0 || height===0) {
      alert('please enter a valid value')   
    }
    else {
      let bmi = (weight(height*height)*703)
    setbmi(bmi.tofixed(1))

    // logic for message

    if (bmi<25) {
      setmessage('Your are UnderWeight')
    }
    else if (bmi>=25 && bmi<30) {
      setmessage('Your are Healthy')
    }
    else {
      setmessage('Your are Overweight')
    }
    }
  }

  // relaod
  
let reload = () => {
  window.location.reload()
}


  return (
    <div className="App">
    <form onSubmit={calcbmi}>

      <div>
      <label>WEIGHT</label>
      <input type="text" placeholder='Enter Your Weight' value={weight} onChange={(e) => setweight(e.target.value)} />
            <br></br> <br></br>

      <label>HEIGHT</label>
      <input type="text" placeholder='Enter Your Weight' value={height} onChange={(e) => setheight(e.target.value)}/>
      </div>

      <div>
      <button className='btn' type='submit'>SUBMIT</button>
      <button className='btn btn-outline' onClick={reload}>RELOAD</button>
      </div>

      <div className='center'>
        <h3>YOUR BMI IS:{bmi}</h3>
        <p>{message}</p>
      </div>


    </form>

    </div>
  );
}

export default App;
