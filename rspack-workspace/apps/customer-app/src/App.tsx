import React, { Suspense, useEffect, useState } from 'react';
import { Button } from 'rspack-ui-components';
import { getRuntimeConfig, setRuntimeConfig, loadRemoteModule } from './runtime-config';

function App() {
  const [config, setConfig] = useState(getRuntimeConfig());
  const [hostInput, setHostInput] = useState(config.supplierHost);
  const [SupplierComponent, setSupplierComponent] = useState<React.ComponentType | null>(null);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const supplierHost = urlParams.get('supplierHost');
    if (supplierHost) {
      const newConfig = { supplierHost };
      setRuntimeConfig(newConfig);
      setConfig(newConfig);
      setHostInput(supplierHost);
    }
  }, []);

  const loadSupplierComponent = async () => {
    try {
      setLoadingError(null);
      const module = await loadRemoteModule('supplierApp', './SupplierComponent');
      setSupplierComponent(() => module.default || module);
    } catch (error) {
      console.error('Failed to load supplier component:', error);
      setLoadingError(`Failed to load from ${config.supplierHost}`);
    }
  };

  useEffect(() => {
    loadSupplierComponent();
  }, [config.supplierHost]);

  const updateSupplierHost = () => {
    const newConfig = { supplierHost: hostInput };
    setRuntimeConfig(newConfig);
    setConfig(newConfig);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Customer App (Rspack)</h1>
      <p>This is the customer application with runtime configuration for micro-frontends.</p>
      
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <h3>🔧 Runtime Configuration</h3>
        <p><strong>Current Supplier Host:</strong> <code>{config.supplierHost}</code></p>
        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            value={hostInput}
            onChange={(e) => setHostInput(e.target.value)}
            placeholder="Enter supplier host URL"
            style={{ padding: '8px', marginRight: '10px', width: '300px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <button 
            onClick={updateSupplierHost} 
            style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Update Host
          </button>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
          💡 You can also use URL parameter: <code>?supplierHost=http://example.com:6001</code>
        </p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h2>📦 Local Shared Button Component</h2>
        <Button onClick={() => alert('Button clicked in Customer App!')}>
          Customer Button
        </Button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>🔗 Federated Component from Supplier App</h2>
        {loadingError ? (
          <div style={{ padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
            <strong>Error:</strong> {loadingError}
            <br />
            <button 
              onClick={loadSupplierComponent}
              style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Retry
            </button>
          </div>
        ) : SupplierComponent ? (
          <Suspense fallback={<div>Loading federated component...</div>}>
            <SupplierComponent />
          </Suspense>
        ) : (
          <div>Loading supplier component from {config.supplierHost}...</div>
        )}
      </div>
    </div>
  );
}

export default App;
