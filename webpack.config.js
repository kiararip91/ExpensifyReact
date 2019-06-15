 const path  = require('path')
 // SEE Documentatiom --> https://webpack.js.org/
 module.exports = {
     entry: './src/app.js',
     output: {
         //Deve essere il path assoluto
         path: path.join(__dirname, 'public'),
         filename: 'bundle.js'
     },
     module: {
         rules: [{
             loader: 'babel-loader',
             test: /\.js$/,
             exclude: /node-modules/
         }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ] 
        }]
     },
     devtool: 'cheap-module-eval-source-map',
     devServer: {
         contentBase: path.join(__dirname, 'public')
     }
 }