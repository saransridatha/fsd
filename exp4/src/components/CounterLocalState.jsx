import { useState } from 'react'

export default function CounterLocalState({ cno }) {
  const [count, setCount] = useState(0)

  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)

  return (
    <div style={{border:'1px solid #ccc', padding:12, borderRadius:6, background:'#f1f8ff', marginBottom:8}}>
      <h3>{cno} : Local State Count: {count}</h3>
      <div style={{display:'flex', gap:8}}>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  )
}
