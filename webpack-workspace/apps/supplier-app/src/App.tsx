import React from 'react';
import { Button } from 'webpack-ui-components';
import SupplierComponent from './components/SupplierComponent';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Supplier App (Webpack)</h1>
      <p>This is the supplier application that exposes federated modules.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Shared Button Component</h2>
        <Button onClick={() => alert('Button clicked in Supplier App!')}>
          Supplier Button
        </Button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Federated Supplier Component</h2>
        <SupplierComponent />
      </div>
    </div>
  );
}

export default App;
