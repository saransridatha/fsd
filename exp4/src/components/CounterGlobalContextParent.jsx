import { useContext } from 'react'
import { CounterContext } from './context/CounterGlobalContextAPI.jsx'

export default function CounterContextParent(props) {
  const { count, setCount } = useContext(CounterContext)

  return (
    <div style={{border:'1px solid #ccc', padding:12, borderRadius:6, background:'#fff7e6', marginBottom:8}}>
      <h3>{props.cno} : Global State (ContextAPI) Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{marginLeft:8}}>Decrease</button>
    </div>
  )
}
