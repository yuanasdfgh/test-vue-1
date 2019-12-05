module.exports = {
    configureWebpack: {
        //路径别名设置
        resolve:{
        alias: {
            'assets': '@assets',
            'components': '@components',
            'network': '@network',
            'views': '@views',
            'common': '@common',
            }
        }
    }
}