//import { plugin } from "../../.cache/typescript/2.6/node_modules/postcss";

module.exports = {
    entry: __dirname + "/src",
    output: {
        path:'/'
    },
    devtool:'source-maps',
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders:'babel-loader',
                query:{
                    presets:['es2015','react'],
                    plugins:['transform-class-properties']
                }
            }
        ]
    }
    
    
}