import React from 'react'
import './App.css'
import './index.css'
import { SelectTool } from './components/SelectTool'
import { Timer } from './components/Timer'

/*

      deadlineTimestamp='2022-06-19 01:56:30-04' 
      standardColor = '#e6e6e6' (optional)
      warningColor = 'salmon' (optional)
      warningLimit = {300000} in milliseconds (optional)


*/

function App() {
  return (
    <main
      style={{ width: '100vw', backgroundColor: '#313330', height: '100vh', display: 'flex', justifyContent: 'start', flexDirection: 'column'}}
    >

      <div style={{}}>
        <Timer
          deadlineTimestamp="2022-08-12 14:00:00-04"
          borderColor="lightgray"
          warningBorderColor="salmon"
          standardColor="#e6e6e6"
          warningColor="salmon"
          warningLimit={1000 * 60 * 60}
          timerUpColor="salmon"
          showFooterInfo={false}
          showTitle="Camping Starts in..."
          useTimerFont={true}
          showTimerIcon={false}
        />
      </div>

      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img
          src="https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ overflow: 'hidden', height: 'auto', width: '100%' }}
        />
      </div>
    </main>
  )
}

export default App
