var webpack = require('webpack');

module.exports = {
    entry: {
        bundle1: './main.js',
        //vendor:['jquery']
    },
    output: {
        filename: 'bundle.js'
    },
    //plugins: [
    //    new webpack.optimize.CommonsChunkPlugin({
    //        name: "vendor",
    //        // (the commons chunk name)
    //
    //        filename: "vendor.js",
    //        // (the filename of the commons chunk)
    //    })
    //]

    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        })
    ]
}
