const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
