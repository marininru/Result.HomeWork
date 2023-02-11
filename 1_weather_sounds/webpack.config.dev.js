const { merge } = require('webpack-merge');
const webpackConfigCommon = require('./webpack.config.common');
const ESLintPlugin = require('eslint-webpack-plugin');

const ESLintOptions = {
    extensions: [`js`],
    exclude: [`/node_modules/`]
};

module.exports = merge(webpackConfigCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        hot: true,
        open: true
    },
    plugins: [new ESLintPlugin(ESLintOptions)]
});
