import { useState } from 'react';

/**
 * Unoptimized List - Demonstrates rendering performance issues
 * Shows how to use DevTools Performance tab to identify bottlenecks
 */
function UnoptimizedList() {
  const [items, setItems] = useState(
    Array.from({ length: 100 }, (_, i) => ({ id: i, value: `Item ${i}` }))
  );
  
  const [filter, setFilter] = useState('');

  // Inefficient filtering - causes unnecessary re-renders
  const filteredItems = items.filter(item => 
    item.value.toLowerCase().includes(filter.toLowerCase())
  );

  const addItem = () => {
    const newItem = { id: items.length, value: `Item ${items.length}` };
    setItems([...items, newItem]);
  };

  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      backgroundColor: '#fce4ec',
      border: '2px solid #e91e63',
      borderRadius: '8px'
    }}>
      <h3>Unoptimized List - Performance Issues</h3>
      
      <input 
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '14px',
          width: '100%',
          maxWidth: '300px',
          borderRadius: '4px',
          border: '1px solid #e91e63',
          marginBottom: '10px'
        }}
      />

      <button 
        onClick={addItem}
        style={{
          padding: '8px 16px',
          backgroundColor: '#e91e63',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          marginBottom: '10px',
          marginLeft: '10px'
        }}
      >
        Add Item
      </button>

      <p>Total items: {items.length} | Filtered: {filteredItems.length}</p>

      <div style={{
        maxHeight: '300px',
        overflowY: 'auto',
        backgroundColor: '#fff',
        borderRadius: '4px',
        padding: '10px'
      }}>
        {filteredItems.map(item => (
          <div 
            key={item.id}
            style={{
              padding: '8px',
              margin: '4px 0',
              backgroundColor: '#f5f5f5',
              borderLeft: '3px solid #e91e63',
              borderRadius: '2px'
            }}
          >
            {item.value} (ID: {item.id})
          </div>
        ))}
      </div>

      <small style={{ display: 'block', marginTop: '10px' }}>
        <strong>Performance Tips:</strong>
        <ul>
          <li>Check Performance tab to see rendering timeline</li>
          <li>Filter input causes re-renders of entire list</li>
          <li>Use useMemo for expensive calculations</li>
          <li>Consider virtualization for large lists</li>
          <li>Use key prop correctly for list items</li>
        </ul>
      </small>
    </div>
  );
}

export default UnoptimizedList;
