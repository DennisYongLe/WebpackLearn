/**
 * 1.Loader 就是将 Webpack 不认识的内容转化为认识的内容
 *
 * 2.插件（Plugin）可以贯穿 Webpack 打包的生命周期，执行不同的任务
 */
const path = require("path");
// 如果我想打包后的资源文件，例如：js 或者 css 文件可以自动引入到 Html 中
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 每次打包的时候，打包目录都会遗留上次打包的文件，为了保持打包目录的纯净，我们需要在打包前将打包目录清空
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 打印环境变量
console.log("process.env.NODE_ENV=", process.env.NODE_ENV);
module.exports = {
  //   模式 开发 生产 none
  mode: "development",
  //   入口
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },

  module: {
    rules: [
      // 转换规则
      {
        // 匹配所有的css文件
        test: /\.css$/,
        use: "css-loader",
      },
    ],
  },
  //   配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
