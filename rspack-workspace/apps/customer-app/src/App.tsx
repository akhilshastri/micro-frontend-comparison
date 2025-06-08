import React, { Suspense } from 'react';
import { Button } from 'rspack-ui-components';

const SupplierComponent = React.lazy(() => import('supplierApp/SupplierComponent'));

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Customer App (Rspack)</h1>
      <p>This is the customer application that consumes federated modules.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Local Shared Button Component</h2>
        <Button onClick={() => alert('Button clicked in Customer App!')}>
          Customer Button
        </Button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Federated Component from Supplier App</h2>
        <Suspense fallback={<div>Loading federated component...</div>}>
          <SupplierComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
