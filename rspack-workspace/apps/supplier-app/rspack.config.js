const ModuleFederationPlugin = require('@rspack/core').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    port: 6001,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'supplierApp',
      filename: 'remoteEntry.js',
      exposes: {
        './SupplierComponent': './src/components/SupplierComponent.tsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  output: {
    publicPath: 'http://localhost:6001/supplier/',
  },
};
