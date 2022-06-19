import React from 'react';
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
    <main style={{ width: '100vw', backgroundColor: '#313330', height: '100vh' }}>

      <div style={{padding: '4rem 0'}}>
      <Timer
        deadlineTimestamp="2022-06-19 03:34:00-04"
        borderColor="lightgray"
        warningBorderColor="salmon"
        standardColor="#e6e6e6"
        warningColor="salmon"
        warningLimit={300000}
        timerUpColor="salmon"
        showFooterInfo={false}
        showTitle='Release Date!'
        useTimerFont={true}
        showTimerIcon={false}
      />

      </div>

      <SelectTool />

      <div>


      </div>
    </main>
  )
}

export default App
