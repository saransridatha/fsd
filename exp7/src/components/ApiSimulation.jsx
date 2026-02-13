import { useState } from 'react';

/**
 * API Simulation - Simulates API calls for network analysis
 * Use the Network tab to observe API response times
 */
function ApiSimulation() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [responseTime, setResponseTime] = useState(null);

  const simulateApiCall = async (delay = 2000, shouldFail = false) => {
    setLoading(true);
    setError(null);
    setData(null);
    setResponseTime(null);

    const startTime = performance.now();

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, delay));

      if (shouldFail) {
        throw new Error('API Request Failed');
      }

      const endTime = performance.now();
      setResponseTime((endTime - startTime).toFixed(2));

      // Simulate API response
      setData({
        id: 1,
        title: 'Sample Data',
        description: 'This is simulated API response data',
        timestamp: new Date().toISOString(),
        records: Array.from({ length: 10 }, (_, i) => ({
          id: i,
          name: `Record ${i}`,
          value: Math.random() * 1000
        }))
      });
    } catch (err) {
      setError(err.message);
      const endTime = performance.now();
      setResponseTime((endTime - startTime).toFixed(2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      backgroundColor: '#f3e5f5',
      border: '2px solid #9c27b0',
      borderRadius: '8px'
    }}>
      <h3>API Response Time Analysis</h3>

      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '15px',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => simulateApiCall(1000)}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#9c27b0',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1
          }}
        >
          Fast API (1s)
        </button>

        <button 
          onClick={() => simulateApiCall(3000)}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff6f00',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1
          }}
        >
          Slow API (3s)
        </button>

        <button 
          onClick={() => simulateApiCall(2000, true)}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1
          }}
        >
          Failed API
        </button>
      </div>

      {loading && (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#fff',
          borderRadius: '4px',
          marginBottom: '10px'
        }}>
          <p>Loading data...</p>
          <div style={{
            width: '30px',
            height: '30px',
            border: '3px solid #ddd',
            borderTop: '3px solid #9c27b0',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
        </div>
      )}

      {error && (
        <div style={{
          padding: '15px',
          backgroundColor: '#ffebee',
          border: '1px solid #f44336',
          borderRadius: '4px',
          marginBottom: '10px',
          color: '#c62828'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {data && (
        <div style={{
          padding: '15px',
          backgroundColor: '#fff',
          borderRadius: '4px',
          marginBottom: '10px'
        }}>
          <h4>Response Data</h4>
          <p><strong>Response Time:</strong> {responseTime}ms</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Records:</strong> {data.records.length}</p>
          <details>
            <summary>View Raw Data</summary>
            <pre style={{
              backgroundColor: '#f5f5f5',
              padding: '10px',
              borderRadius: '4px',
              overflow: 'auto'
            }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </details>
        </div>
      )}

      <small style={{ display: 'block', marginTop: '10px' }}>
        <strong>How to analyze:</strong>
        <ol>
          <li>Open Chrome DevTools (F12) → Network tab</li>
          <li>Click one of the API buttons above</li>
          <li>Observe the request in the Network panel</li>
          <li>Check response time, payload size, and status</li>
          <li>Throttle network speed to see slow API impact</li>
        </ol>
      </small>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ApiSimulation;
