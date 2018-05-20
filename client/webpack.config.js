const path = require('path');

module.exports = {
    entry: {
        bundle:'./src/jsDefinitive/index.js',
        ninja:'./src/ninja/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    //developmentはソースマップ有効 productionは最適化
    mode: 'development',
    //ローカル開発用環境を立ち上げる
    devServer:{
        contentBase:'dist',
        open: true
    }
}
