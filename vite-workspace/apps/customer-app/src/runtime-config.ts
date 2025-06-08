export interface RuntimeConfig {
  supplierHost: string;
}

export const getRuntimeConfig = (): RuntimeConfig => {
  if (typeof window !== 'undefined' && (window as any).__RUNTIME_CONFIG__) {
    return (window as any).__RUNTIME_CONFIG__;
  }
  
  return {
    supplierHost: 'http://localhost:4001'
  };
};

export const setRuntimeConfig = (config: RuntimeConfig) => {
  if (typeof window !== 'undefined') {
    (window as any).__RUNTIME_CONFIG__ = config;
  }
};
