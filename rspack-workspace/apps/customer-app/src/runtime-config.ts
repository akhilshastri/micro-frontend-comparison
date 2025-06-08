export interface RuntimeConfig {
  supplierHost: string;
}

export const getRuntimeConfig = (): RuntimeConfig => {
  if (typeof window !== 'undefined' && (window as any).__RUNTIME_CONFIG__) {
    return (window as any).__RUNTIME_CONFIG__;
  }
  
  return {
    supplierHost: 'http://localhost:6001'
  };
};

export const setRuntimeConfig = (config: RuntimeConfig) => {
  if (typeof window !== 'undefined') {
    (window as any).__RUNTIME_CONFIG__ = config;
  }
};

export const loadRemoteModule = async (remoteName: string, moduleName: string) => {
  const config = getRuntimeConfig();
  const remoteUrl = `${config.supplierHost}/supplier/remoteEntry.js`;
  
  try {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = remoteUrl;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load remote: ${remoteUrl}`));
      document.head.appendChild(script);
    });

    const container = (window as any)[remoteName];
    await container.init((window as any).__webpack_share_scopes__.default);
    const factory = await container.get(moduleName);
    return factory();
  } catch (error) {
    console.error(`Failed to load remote module ${remoteName}/${moduleName}:`, error);
    throw error;
  }
};
