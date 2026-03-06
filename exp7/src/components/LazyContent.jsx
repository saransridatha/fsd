/**
 * Lazy Content - This component is lazy loaded
 * It simulates a heavy content component
 */
function LazyContent() {
  return (
    <div style={{
      padding: '20px',
      marginTop: '10px',
      backgroundColor: '#fff9c4',
      border: '2px solid #fbc02d',
      borderRadius: '8px'
    }}>
      <h4>Lazy Loaded Content</h4>
      <p>This component was loaded dynamically using code splitting!</p>
      <ul>
        <li>Reduces initial bundle size</li>
        <li>Faster Time to Interactive (TTI)</li>
        <li>Improves First Contentful Paint (FCP)</li>
        <li>Better performance on slower networks</li>
      </ul>
      <p>
        <strong>Check Network tab:</strong> You'll see this was loaded as a separate chunk 
        when you clicked the button, not in the main bundle.
      </p>
    </div>
  );
}

export default LazyContent;
