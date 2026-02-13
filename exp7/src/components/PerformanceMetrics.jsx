import { useEffect, useState } from 'react';

/**
 * Performance Metrics - Display key performance metrics
 * Shows real-time metrics that can be observed in DevTools
 */
function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    tti: null,
    domReady: null,
    loadTime: null
  });

  useEffect(() => {
    // Get navigation timing data
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const navigationStart = timing.navigationStart;

      const data = {
        domReady: timing.domContentLoadedEventEnd - navigationStart,
        loadTime: timing.loadEventEnd - navigationStart,
        fcp: null,
        lcp: null,
        tti: null
      };

      // Observe First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              data.fcp = entry.startTime.toFixed(2);
            }
          }
          setMetrics(prev => ({ ...prev, ...data }));
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      setMetrics(data);
    }
  }, []);

  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      backgroundColor: '#e3f2fd',
      border: '2px solid #1976d2',
      borderRadius: '8px'
    }}>
      <h3>Performance Metrics</h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginTop: '15px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '15px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <strong>DOM Ready Time</strong>
          <p style={{ fontSize: '24px', color: '#1976d2', margin: '10px 0' }}>
            {metrics.domReady ? `${metrics.domReady}ms` : 'Loading...'}
          </p>
          <small>Time for DOM to be fully loaded</small>
        </div>

        <div style={{
          backgroundColor: '#fff',
          padding: '15px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <strong>Page Load Time</strong>
          <p style={{ fontSize: '24px', color: '#1976d2', margin: '10px 0' }}>
            {metrics.loadTime ? `${metrics.loadTime}ms` : 'Loading...'}
          </p>
          <small>Total time to load all resources</small>
        </div>

        <div style={{
          backgroundColor: '#fff',
          padding: '15px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <strong>First Contentful Paint</strong>
          <p style={{ fontSize: '24px', color: '#1976d2', margin: '10px 0' }}>
            {metrics.fcp ? `${metrics.fcp}ms` : 'N/A'}
          </p>
          <small>When first content appears</small>
        </div>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '4px'
      }}>
        <h4>How to Measure Performance</h4>
        <ol>
          <li><strong>Network Tab:</strong> Chrome DevTools → Network → Reload page</li>
          <li><strong>Performance Tab:</strong> Chrome DevTools → Performance → Record → Reload → Stop</li>
          <li><strong>Lighthouse:</strong> Chrome DevTools → Lighthouse → Generate Report</li>
          <li><strong>Memory Tab:</strong> Chrome DevTools → Memory → Take Snapshot</li>
        </ol>
      </div>
    </div>
  );
}

export default PerformanceMetrics;
