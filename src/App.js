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
      style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column',flexWrap:'wrap'}}
      className="main__bg"
    >

      <div style={{}}>
        <Timer
          deadlineTimestamp="2022-11-12 0:00:00-04"
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

      <div style={{ width: '100%', overflow: 'hidden' }}>
        {/* <img
          src="https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ overflow: 'hidden', height: 'auto', width: '100%' }}
        /> */}
      </div>
    </main>
  )
}

export default App
