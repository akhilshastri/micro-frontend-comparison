# Setup Instructions

This guide provides step-by-step instructions for setting up and running each workspace.

## Prerequisites

- Node.js 18+ 
- npm 8+
- Git

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd micro-frontend-comparison
   ```

2. **Install root dependencies**:
   ```bash
   npm install
   ```

3. **Install workspace dependencies**:
   ```bash
   # Install all workspace dependencies
   npm install --workspaces
   ```

## Running the Applications

### Vite Workspace

```bash
# Start both apps concurrently
npm run dev:vite

# Or start individually
cd vite-workspace
npm run dev:supplier  # Port 4001
npm run dev:customer  # Port 4000
```

**Access URLs**:
- Customer App: http://localhost:4000
- Supplier App: http://localhost:4001

### Webpack Workspace

```bash
# Start both apps concurrently  
npm run dev:webpack

# Or start individually
cd webpack-workspace
npm run dev:supplier  # Port 5001
npm run dev:customer  # Port 5000
```

**Access URLs**:
- Customer App: http://localhost:5000
- Supplier App: http://localhost:5001

### Rspack Workspace

```bash
# Start both apps concurrently
npm run dev:rspack

# Or start individually
cd rspack-workspace
npm run dev:supplier  # Port 6001
npm run dev:customer  # Port 6000
```

**Access URLs**:
- Customer App: http://localhost:6000
- Supplier App: http://localhost:6001

## Building for Production

### Build All Workspaces
```bash
npm run build:vite
npm run build:webpack
npm run build:rspack
```

### Build Individual Workspaces
```bash
# Vite
cd vite-workspace && npm run build

# Webpack
cd webpack-workspace && npm run build

# Rspack
cd rspack-workspace && npm run build
```

## Testing Module Federation

1. **Start the supplier app first** (exposes the federated module)
2. **Start the customer app** (consumes the federated module)
3. **Verify federation** by checking that the customer app loads the supplier component

### Expected Behavior

- Customer app displays local Button component
- Customer app loads and displays SupplierComponent from supplier app
- SupplierComponent maintains its own state (counter)
- Both apps share React dependencies via federation

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure both apps are running and accessible
2. **Module Not Found**: Check that supplier app is running before customer app
3. **Port Conflicts**: Ensure ports are available (4000-4001, 5000-5001, 6000-6001)

### Debug Steps

1. Check browser console for federation errors
2. Verify remote entry URLs are accessible:
   - http://localhost:4001/supplier/remoteEntry.js (Vite)
   - http://localhost:5001/supplier/remoteEntry.js (Webpack)
   - http://localhost:6001/supplier/remoteEntry.js (Rspack)

3. Ensure all dependencies are installed in workspaces

## Development Workflow

1. **Make changes** to components or configuration
2. **Hot reload** will update the applications automatically
3. **Test federation** by interacting with components
4. **Build and test** production builds before deployment

## Architecture Notes

- Each workspace is completely independent
- Shared UI components are workspace-scoped
- Module federation configuration follows convention-based URLs
- TypeScript support is configured for all workspaces
