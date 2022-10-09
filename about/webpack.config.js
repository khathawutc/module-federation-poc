// host/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('./package.json')

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'AboutApp',
      filename: 'moduleEntry.js',
      remotes: {
        HomeApp: `HomeApp@http://localhost:4000/moduleEntry.js`,
      },
      exposes: {
        './routes': './src/routes',
      },
      shared: {
        // ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom'],
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
}
