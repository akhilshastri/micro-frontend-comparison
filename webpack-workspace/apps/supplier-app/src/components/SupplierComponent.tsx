import React, { useState } from 'react';
import { UIComponents } from 'webpack-ui-components';
const { Button } = UIComponents;

const SupplierComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      border: '2px solid #3b82f6', 
      padding: '16px', 
      borderRadius: '8px',
      backgroundColor: '#f8fafc'
    }}>
      <h3>Federated Supplier Component (Webpack)</h3>
      <p>This component is exposed via Module Federation</p>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <Button onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SupplierComponent;
