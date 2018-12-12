/**
 * Created by Administrator on 2018/12/10.
 */
module.exports={
    entry:'./main.jsx',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','react']
                    }
                }
            }
        ]
    }
}