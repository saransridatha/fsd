import { useContext } from 'react'
import { ReduxLikeContext } from '../store/Store.jsx'

export default function CounterReduxParent(props) {
  const ctx = useContext(ReduxLikeContext)
  const count = ctx.state.count
  const dispatch = ctx.dispatch

  return (
    <div style={{border:'1px solid #ccc', padding:12, borderRadius:6, background:'#e8fff1', marginBottom:8}}>
      <h3>{props.cno} : Global State (Redux-like) Count: {count}</h3>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{marginLeft:8}}>Decrease</button>
    </div>
  )
}
