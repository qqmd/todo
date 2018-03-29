const path = require('path')

const HTMLPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

//判断当前环境是否是开发环境 dev 
const isDev = process.env.NODE_ENV === "dev"

const config = {
    target: 'web',//编译目标设置为web平台
    entry: path.join(__dirname, 'src/index.js'), //入口文件 __dirname:目录所在的地址
    output: {
        filename: 'bundle.js', //输出文件名
        path: path.join(__dirname, 'dist') //输出文件地址
    },
    module: {
        rules: [
            {
                //加载 .vue 文件
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                //加载 .vue 文件
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                //加载 .css 文件
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //css 预处理器
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                //加载图片文件
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {//loader 的参数配置
                            limit: 1024, // 图片大小 1024
                            name: 'Ican-[name].[ext]'//新文件名字 Ican-: 文件名前缀, [name]:原文件名,[ext]:扩展名
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"dev"' : '"product"'
            }
        }),
        new HTMLPlugin()
    ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-map'
    config.devServer = {
        port: '8000', //服务器端口
        host: '0.0.0.0',
        overlay: {
            errors: true,//将错误显示在网页上
        },
        // historyFaliback: {

        // }
        hot: true //页面重新加载的时候,只重新渲染被修改过的组件,而不会刷新整个页面  处理热加载的代码
        // open: true //运行devServer时自动打开浏览器
    }
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin
    )
}

module.exports = config