import React, { useState } from 'react';
import './App.css';
import Time from './components/Time';

function App() {

  const [state, setState] = useState({
    hours: '0',
    minutes: '0',
    secs: '0',
    hex: '#000'
})
  let s = 0
  let m = 0
  let h = 0

  const startHandler = () => {
       setInterval(()=>{
        s++
        if(s >=60){
          s = 0
          m += 1
        }
        if(m >= 60){
          m = 0
          h += 1
        }
        if(s<= 10){

        }
        setState({
          secs:s,
          minutes:m,
          hours: h,
          hex: '#'+Math.ceil(Math.random()*10 )+ m+ s
        })
      }, 100)

  }

  
 

  return (
    <div className="App" style={{
      backgroundColor:`${state.hex}`
    }}>
      <Time time={state}/>
      {/* <Circle/> */}
      <div style={{
        marginTop:'30px'
      }}></div>
      <div className='hex'>{state.hex}</div>
      <button className='startBtn' onClick={startHandler}>Start</button>
    </div>
  );
}

export default App;
