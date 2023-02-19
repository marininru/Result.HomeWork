const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log(__dirname);

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'public', 'assets'),
                    to: path.resolve(__dirname, 'dist', 'assets')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Postcss loader
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [[require('postcss-preset-env')]]
                            },
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ]
                        }
                    },
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(jpg|mp3|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
};
