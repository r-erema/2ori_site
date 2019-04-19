const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
};