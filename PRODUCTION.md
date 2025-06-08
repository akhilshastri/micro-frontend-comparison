# Production Configuration Guide

This guide explains how to configure the micro-frontend applications for production environments with dynamic host resolution.

## Environment Variables

Each workspace uses environment variables to configure the supplier app host dynamically:

### Vite Workspace
- **Variable:** `VITE_SUPPLIER_HOST`
- **Default:** `http://localhost:4001`
- **Production Example:** `https://supplier-app.production.com`

### Webpack Workspace
- **Variable:** `SUPPLIER_HOST`
- **Default:** `http://localhost:5001`
- **Production Example:** `https://supplier-app.production.com`

### Rspack Workspace
- **Variable:** `SUPPLIER_HOST`
- **Default:** `http://localhost:6001`
- **Production Example:** `https://supplier-app.production.com`

## Configuration Methods

### 1. Environment Files
Create `.env` files in each workspace:

```bash
# vite-workspace/.env
VITE_SUPPLIER_HOST=https://supplier-app.production.com

# webpack-workspace/.env
SUPPLIER_HOST=https://supplier-app.production.com

# rspack-workspace/.env
SUPPLIER_HOST=https://supplier-app.production.com
```

### 2. Build-time Configuration
Set environment variables during build:

```bash
# Vite
VITE_SUPPLIER_HOST=https://supplier-app.production.com npm run build

# Webpack
SUPPLIER_HOST=https://supplier-app.production.com npm run build

# Rspack
SUPPLIER_HOST=https://supplier-app.production.com npm run build
```

### 3. Container/Docker Configuration
```dockerfile
# Dockerfile example
ENV VITE_SUPPLIER_HOST=https://supplier-app.production.com
ENV SUPPLIER_HOST=https://supplier-app.production.com
```

### 4. CI/CD Pipeline Configuration
```yaml
# GitHub Actions example
env:
  VITE_SUPPLIER_HOST: ${{ secrets.SUPPLIER_HOST_URL }}
  SUPPLIER_HOST: ${{ secrets.SUPPLIER_HOST_URL }}
```

## Runtime vs Build-time Configuration

### Vite (Build-time)
- Uses `import.meta.env.VITE_SUPPLIER_HOST`
- Environment variables are embedded at build time
- Requires rebuild for different environments

### Webpack & Rspack (Build-time)
- Uses `process.env.SUPPLIER_HOST`
- Environment variables are embedded at build time
- Requires rebuild for different environments

## Advanced: Runtime Configuration

For true runtime configuration (without rebuilds), consider:

1. **Configuration API Endpoint**
2. **Window globals set by server**
3. **Dynamic imports with runtime host resolution**

Example runtime approach:
```javascript
// Runtime configuration service
const getConfig = async () => {
  const response = await fetch('/api/config');
  return response.json();
};

// Dynamic federation setup
const { supplierHost } = await getConfig();
const supplierApp = await import(`${supplierHost}/supplier/remoteEntry.js`);
```

## Security Considerations

1. **HTTPS Only:** Always use HTTPS in production
2. **CORS Configuration:** Ensure proper CORS headers on supplier apps
3. **CSP Headers:** Configure Content Security Policy for federated modules
4. **Domain Validation:** Validate supplier hosts against allowlist

## Deployment Checklist

- [ ] Environment variables configured for target environment
- [ ] CORS headers configured on supplier applications
- [ ] HTTPS certificates in place
- [ ] CDN configuration (if applicable)
- [ ] Health checks for all federated services
- [ ] Fallback mechanisms for failed federation loads
- [ ] Monitoring and logging for federation errors

## Troubleshooting

### Common Issues:
1. **CORS Errors:** Check supplier app CORS configuration
2. **404 on remoteEntry.js:** Verify supplier host URL and path
3. **Module Loading Failures:** Check network connectivity and SSL certificates
4. **Version Mismatches:** Ensure compatible React/React-DOM versions across apps

### Debug Commands:
```bash
# Check environment variables
echo $VITE_SUPPLIER_HOST
echo $SUPPLIER_HOST

# Test supplier endpoint
curl -I https://supplier-app.production.com/supplier/remoteEntry.js
```
