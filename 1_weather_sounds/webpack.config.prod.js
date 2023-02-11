const { merge } = require('webpack-merge');
const webpackConfigCommon = require('./webpack.config.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(webpackConfigCommon, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin()
        ]
    }
});
