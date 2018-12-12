var webpack = require('webpack');

module.exports = {
    entry: {
        bundle1: './main.jsx',
    },
    output: {
        filename: 'bundle.js'
    },
    module:{
      rules:[
          {
              test:/\.js[x]?$/,
              exclude:/node_modules/,
              use:{
                  loader:'babel-loader',
                  options:{
                      presets:['es2015','react']
                  }
              }
          }
      ]
    },
    externals:{ //全局变量
        // require('data') is external and available
        //  on the global var data
        'data':'data'
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        })
    ]
}
