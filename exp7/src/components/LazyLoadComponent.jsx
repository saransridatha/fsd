import { lazy, Suspense, useState } from 'react';

// Lazy load a heavy component - only loads when needed
const LazyHeavyComponent = lazy(() => 
  new Promise(resolve => {
    // Simulate lazy loading delay
    setTimeout(() => {
      resolve(import('./LazyContent.jsx'));
    }, 500);
  })
);

/**
 * Lazy Load Component - Demonstrates code splitting and lazy loading
 * This component shows how to defer loading of components until needed
 */
function LazyLoadComponent() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      backgroundColor: '#fff3e0',
      border: '2px solid #ff9800',
      borderRadius: '8px'
    }}>
      <h3>Lazy Loading - Code Splitting</h3>
      
      <button 
        onClick={() => setShowLazy(!showLazy)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff9800',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        {showLazy ? 'Hide' : 'Load'} Lazy Component
      </button>

      <p>
        <strong>How it works:</strong> Component is NOT loaded initially. 
        Only when you click the button does it load. Check Network tab in DevTools.
      </p>

      {showLazy && (
        <Suspense fallback={
          <div style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            marginTop: '10px'
          }}>
            <p>Loading component...</p>
            <div style={{
              width: '30px',
              height: '30px',
              border: '3px solid #ddd',
              borderTop: '3px solid #ff9800',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }}></div>
          </div>
        }>
          <LazyHeavyComponent />
        </Suspense>
      )}

      <small>
        <strong>Performance Benefit:</strong> Initial bundle size is reduced. 
        The lazy-loaded component is only downloaded when needed, improving initial page load.
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

export default LazyLoadComponent;
