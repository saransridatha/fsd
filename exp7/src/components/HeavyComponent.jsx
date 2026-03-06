import { useState } from 'react';

/**
 * Heavy Component - Simulates heavy computation
 * This component performs a computationally expensive task
 * Use DevTools Performance tab to observe the impact
 */
function HeavyComponent() {
  const [computation, setComputation] = useState(0);

  const performHeavyComputation = () => {
    console.time('Heavy Computation');
    let result = 0;
    
    // Simulate heavy computation
    for (let i = 0; i < 1000000000; i++) {
      result += Math.sqrt(i);
    }
    
    console.timeEnd('Heavy Computation');
    setComputation(result);
  };

  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      backgroundColor: '#ffcccc',
      border: '2px solid #cc0000',
      borderRadius: '8px'
    }}>
      <h3>Heavy Component - Performance Testing</h3>
      <p>
        This component simulates heavy computation to observe performance impact.
        Check the Performance tab in DevTools to see the rendering time spike.
      </p>
      <button 
        onClick={performHeavyComputation}
        style={{
          padding: '10px 20px',
          backgroundColor: '#cc0000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        Run Heavy Computation
      </button>
      <p>Result: {computation.toFixed(0)}</p>
      <small>
        <strong>Performance Observation:</strong> Click the button, then check Chrome DevTools 
        → Performance tab → Record → Click button → Stop. Notice the long task in the timeline.
      </small>
    </div>
  );
}

export default HeavyComponent;
