const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');

module.exports = (env) => {

  return {
    entry: [
      './src/index'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/[name].bundle.js',
      publicPath: '/'
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            mangle: true,
          },
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            !!env.production ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ]
        },
      ]
    },
    devServer: {
      contentBase: './dist',
      hotOnly: true,
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'public/assets', to: 'assets' }
      ]),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "assets/[name].css",
        chunkFilename: "assets/[id].css"
      })
    ]
  }
}