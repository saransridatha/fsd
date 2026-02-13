import { memo, useState } from 'react';

/**
 * Memoized Component - Optimized component using React.memo
 * Prevents unnecessary re-renders when props haven't changed
 */
const MemoizedItem = memo(function MemoizedItem({ item, index }) {
  console.log(`Rendering MemoizedItem ${index}`);
  
  return (
    <div style={{
      padding: '10px',
      margin: '5px',
      backgroundColor: '#e8f5e9',
      border: '1px solid #4caf50',
      borderRadius: '4px'
    }}>
      Item {index}: {item.name} - {item.value}
    </div>
  );
});

/**
 * Unoptimized Item - Re-renders on every parent update
 */
function UnoptimizedItem({ item, index }) {
  console.log(`Rendering UnoptimizedItem ${index}`);
  
  return (
    <div style={{
      padding: '10px',
      margin: '5px',
      backgroundColor: '#ffebee',
      border: '1px solid #f44336',
      borderRadius: '4px'
    }}>
      Item {index}: {item.name} - {item.value}
    </div>
  );
}

function MemoizedComponent() {
  const [items] = useState([
    { name: 'Item A', value: 100 },
    { name: 'Item B', value: 200 },
    { name: 'Item C', value: 300 }
  ]);
  
  const [counter, setCounter] = useState(0);

  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      backgroundColor: '#f0f4ff',
      border: '2px solid #2196f3',
      borderRadius: '8px'
    }}>
      <h3>Memoization - Preventing Unnecessary Re-renders</h3>
      
      <button 
        onClick={() => setCounter(counter + 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2196f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}
      >
        Counter: {counter}
      </button>

      <p>
        <strong>Open DevTools Console</strong> to observe render logs. 
        Memoized items won't re-render when counter changes, unoptimized items will.
      </p>

      <h4>Memoized Items (Optimized):</h4>
      {items.map((item, idx) => (
        <MemoizedItem key={idx} item={item} index={idx} />
      ))}

      <h4>Unoptimized Items:</h4>
      {items.map((item, idx) => (
        <UnoptimizedItem key={idx} item={item} index={idx} />
      ))}

      <small>
        <strong>Observation:</strong> Check console logs. Every click increments counter 
        and re-renders the component, but memoized items show fewer logs than unoptimized ones.
      </small>
    </div>
  );
}

export default MemoizedComponent;
