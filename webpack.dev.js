/* eslint-disable */
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { common } = require('./webpack.dev.common');
const threadLoader = require('thread-loader');
const CopyPlugin = require('copy-webpack-plugin');

const poolOptions = {
  workerParallelJobs: 50,
  poolTimeout: Infinity,
  name: 'Typescript',
  workerNodeArgs: ['--max-old-space-size=4096'],
};

threadLoader.warmup(poolOptions, ['ts-loader', 'url-loader']);

module.exports = merge(common, {
  plugins: [
    new CopyPlugin([
      {
        from: './config/app.dev.json',
        to: './config/app.json',
      },
    ]),
  ],
});
