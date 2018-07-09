const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = env => {
    return {
        entry: ['./src/main.scss'],
        output: {
            filename: 'main.css',
            path: path.resolve(__dirname, './dist')
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: './[name].css'
            })
        ]
    }
};

module.exports = config;