import { useState } from 'react';
import HeavyComponent from './components/HeavyComponent';
import MemoizedComponent from './components/MemoizedComponent';
import LazyLoadComponent from './components/LazyLoadComponent';
import UnoptimizedList from './components/UnoptimizedList';
import PerformanceMetrics from './components/PerformanceMetrics';
import ApiSimulation from './components/ApiSimulation';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('metrics');

  const sections = [
    { id: 'metrics', label: '📊 Metrics', component: PerformanceMetrics },
    { id: 'heavy', label: '⚙️ Heavy Computation', component: HeavyComponent },
    { id: 'memoized', label: '✅ Memoization', component: MemoizedComponent },
    { id: 'lazy', label: '📦 Lazy Loading', component: LazyLoadComponent },
    { id: 'list', label: '📋 Unoptimized List', component: UnoptimizedList },
    { id: 'api', label: '🌐 API Analysis', component: ApiSimulation }
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px 20px',
        borderRadius: '8px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5em' }}>
          🚀 Frontend Performance Analysis
        </h1>
        <p style={{ margin: '0', fontSize: '1.1em', opacity: 0.9 }}>
          Experiment 7: Analyze Performance using Browser Developer Tools
        </p>
      </div>

      {/* Instructions */}
      <div style={{
        backgroundColor: '#fffde7',
        border: '2px solid #fbc02d',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3 style={{ marginTop: 0 }}>📋 How to Use This Application</h3>
        <ol>
          <li><strong>Open Chrome DevTools:</strong> Press <code>F12</code> or Right-click → Inspect</li>
          <li><strong>Navigate Sections:</strong> Click the buttons below to explore different components</li>
          <li><strong>Analyze Performance:</strong>
            <ul>
              <li><strong>Network Tab:</strong> Check API requests and resource loading</li>
              <li><strong>Performance Tab:</strong> Record and analyze rendering timeline</li>
              <li><strong>Console:</strong> View logs and performance measurements</li>
              <li><strong>Lighthouse:</strong> Generate performance report</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Navigation Buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '10px',
        marginBottom: '30px'
      }}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            style={{
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: activeSection === section.id ? '#667eea' : '#e0e0e0',
              color: activeSection === section.id ? 'white' : '#333',
              transition: 'all 0.3s ease'
            }}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Active Component */}
      <div style={{
        minHeight: '400px',
        marginBottom: '30px'
      }}>
        {ActiveComponent && <ActiveComponent />}
      </div>

      {/* Key Metrics Reference */}
      <div style={{
        backgroundColor: '#f5f5f5',
        border: '2px solid #999',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3>📚 Key Performance Metrics Reference</h3>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#e0e0e0' }}>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #999' }}>Metric</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #999' }}>Description</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #999' }}>Target</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: 'white' }}>
              <td style={{ padding: '10px', border: '1px solid #999' }}><strong>FCP</strong></td>
              <td style={{ padding: '10px', border: '1px solid #999' }}>First Contentful Paint - When first content appears</td>
              <td style={{ padding: '10px', border: '1px solid #999' }}>{'< 1.8s'}</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '10px', border: '1px solid #999' }}><strong>LCP</strong></td>
              <td style={{ padding: '10px', border: '1px solid #999' }}>Largest Contentful Paint - Main content load time</td>
              <td style={{ padding: '10px', border: '1px solid #999' }}>{'< 2.5s'}</td>
            </tr>
            <tr style={{ backgroundColor: 'white' }}>
              <td style={{ padding: '10px', border: '1px solid #999' }}><strong>TTI</strong></td>
              <td style={{ padding: '10px', border: '1px solid #999' }}>Time to Interactive - When page becomes usable</td>
              <td style={{ padding: '10px', border: '1px solid #999' }}>{'< 3.8s'}</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '10px', border: '1px solid #999' }}><strong>CLS</strong></td>
              <td style={{ padding: '10px', border: '1px solid #999' }}>Cumulative Layout Shift - Visual stability</td>
              <td style={{ padding: '10px', border: '1px solid #999' }}>{'< 0.1'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DevTools Navigation Guide */}
      <div style={{
        backgroundColor: '#e3f2fd',
        border: '2px solid #1976d2',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3>🛠️ Chrome DevTools Navigation Guide</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h4>Network Tab</h4>
            <ol style={{ fontSize: '14px', marginBottom: 0 }}>
              <li>Open DevTools (F12)</li>
              <li>Go to Network tab</li>
              <li>Reload page</li>
              <li>Observe requests, sizes, and loading time</li>
              <li>Right-click → Throttling for slow network</li>
            </ol>
          </div>

          <div>
            <h4>Performance Tab</h4>
            <ol style={{ fontSize: '14px', marginBottom: 0 }}>
              <li>Open DevTools (F12)</li>
              <li>Go to Performance tab</li>
              <li>Click Record button</li>
              <li>Interact with page</li>
              <li>Click Stop and analyze timeline</li>
            </ol>
          </div>

          <div>
            <h4>Lighthouse Tab</h4>
            <ol style={{ fontSize: '14px', marginBottom: 0 }}>
              <li>Open DevTools (F12)</li>
              <li>Go to Lighthouse tab</li>
              <li>Select Analyze page load</li>
              <li>Wait for report generation</li>
              <li>Review Performance, Accessibility, etc.</li>
            </ol>
          </div>

          <div>
            <h4>Memory Tab</h4>
            <ol style={{ fontSize: '14px', marginBottom: 0 }}>
              <li>Open DevTools (F12)</li>
              <li>Go to Memory tab</li>
              <li>Take Heap Snapshot</li>
              <li>Compare snapshots to find leaks</li>
              <li>Record allocation timeline</li>
            </ol>
          </div>

          <div>
            <h4>Console Tab</h4>
            <ol style={{ fontSize: '14px', marginBottom: 0 }}>
              <li>Open DevTools (F12)</li>
              <li>Go to Console tab</li>
              <li>View logged messages and errors</li>
              <li>Use console.time() and console.timeEnd()</li>
              <li>Monitor performance.now()</li>
            </ol>
          </div>

          <div>
            <h4>Sources Tab</h4>
            <ol style={{ fontSize: '14px', marginBottom: 0 }}>
              <li>Open DevTools (F12)</li>
              <li>Go to Sources tab</li>
              <li>Set breakpoints for debugging</li>
              <li>Step through code execution</li>
              <li>Inspect variables and scope</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Optimization Techniques */}
      <div style={{
        backgroundColor: '#f3e5f5',
        border: '2px solid #9c27b0',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3>⚡ Optimization Techniques</h3>
        <ul style={{ columns: 2, fontSize: '14px' }}>
          <li>✅ Lazy loading components with React.lazy()</li>
          <li>✅ Memoization with React.memo()</li>
          <li>✅ Code splitting for smaller bundles</li>
          <li>✅ useCallback for function memoization</li>
          <li>✅ useMemo for expensive calculations</li>
          <li>✅ Image optimization and CDN usage</li>
          <li>✅ Minifying CSS and JavaScript</li>
          <li>✅ Service Workers for caching</li>
          <li>✅ Avoiding unnecessary re-renders</li>
          <li>✅ Virtual scrolling for large lists</li>
        </ul>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        borderTop: '2px solid #e0e0e0',
        color: '#666',
        fontSize: '14px'
      }}>
        <p>
          <strong>Experiment 7:</strong> Frontend Performance Analysis using Browser Developer Tools
        </p>
        <p>
          💡 Tip: Open Chrome DevTools alongside this page to analyze performance in real-time
        </p>
      </footer>
    </div>
  );
}

export default App;
