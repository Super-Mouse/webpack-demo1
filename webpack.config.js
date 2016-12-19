/**
 * Created by fenghao4 on 2016/12/13.
 */

var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        app: './src/entry.js',
        vendor: ['./lib/jquery/jquery'] //第三方库
    },
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=10240"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    plugins:[
            new webpack.ProvidePlugin({
                $: 'jquery'
            }),     //这个可以使jquery变成全局变量，不用在自己文件里require('jquery')了
            new webpack.optimize.CommonsChunkPlugin('vendor', './build/vendor.bundle.js'),   //这是第三方库打包生成的文件
            // new webpack.optimize.UglifyJsPlugin()       //压缩
        ]
}
