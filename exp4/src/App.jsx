import './App.css'

import CounterLocalState from './components/CounterLocalState.jsx'
import CounterContextParent from './components/CounterGlobalContextParent.jsx'
import CounterReduxParent from './components/CounterGlobalReduxParent.jsx'
import { CounterContextProvider } from './components/context/CounterGlobalContextAPI.jsx'

function App() {
  return (
    <>
      <div style={{padding:20}}>
        <h2>Experiment-4: State Management Examples</h2>

        <section style={{marginBottom:20}}>
          <CounterLocalState cno={1} />
          <CounterLocalState cno={2} />
        </section>

        <section style={{marginBottom:20}}>
          <CounterContextProvider>
            <CounterContextParent cno={1} />
            <CounterContextParent cno={2} />
          </CounterContextProvider>
        </section>

        <section style={{marginBottom:20}}>
          <CounterReduxParent cno={1} />
          <CounterReduxParent cno={2} />
        </section>

        <hr />
      </div>
    </>
  )
}

export default App
