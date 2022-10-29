import React from 'react'
import './App.css'
import './index.css'
import { Timer } from './components/Timer'
import './styles.css'

/*

      deadlineTimestamp='2022-06-19 01:56:30-04' 
      standardColor = '#e6e6e6' (optional)
      warningColor = 'salmon' (optional)
      warningLimit = {300000} in milliseconds (optional)


*/

function App() {

  return (
    <main
      style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column',flexWrap:'wrap', position: 'relative'}}
      className="main__bg"
    >

      <div style={{}}>
        <Timer
          deadlineTimestamp="2022-12-09 0:00:00-04"
          borderColor="lightgray"
          warningBorderColor="salmon"
          standardColor="#e6e6e6"
          warningColor="salmon"
          warningLimit={1000 * 60 * 60}
          timerUpColor="salmon"
          showFooterInfo={false}
          showTitle="Duolingo 100 day countdown!"
          useTimerFont={true}
          showTimerIcon={true}
        />
      </div>



        <img
          src='./duolingo.png'
          style={{ position: 'absolute', bottom: 0, width: '100px', height: '100px', objectFit: 'contain', overflow: 'hidden', margin: '2rem 0 8rem', alignSelf:'center'}}
        />
   


    </main>
  )
}

export default App
