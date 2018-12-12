/**
 * Created by Administrator on 2018/12/10.
 */
module.exports={
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
               test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}