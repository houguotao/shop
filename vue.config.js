module.exports = {
    publicPath: "/shop/",
    assetsDir: "static",
    css: {
        extract: false,
        sourceMap: false,
        modules: false,
    },
    devServer: {
        disableHostCheck: true,
        open: true,
        port: 8090,
        hot: true,
        hotOnly: false,
        compress: true,
        https: false,
        proxy: null
    }
}