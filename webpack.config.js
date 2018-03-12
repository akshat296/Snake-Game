//import { plugin } from "../../.cache/typescript/2.6/node_modules/postcss";
const path = require('path');
console.log(path.resolve(__dirname));
module.exports = {
    entry: __dirname + "/src",
    output: {
        path: __dirname + "/js",
        filename: "bundle.js"
    },
    devtool: 'source-maps',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }



        ]
    },
    resolve: {
        modules: [path.resolve(__dirname), "node_modules"]
    }
}