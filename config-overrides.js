const path = require('path');
const {
    override,
    addWebpackAlias,
    addWebpackModuleRule,
} = require('customize-cra');

const addChunkName = () => (config) => {
    config.output = {
        ...config.output,
        chunkFilename: '[name].[chunkhash].js',
    };
    return config;
};

module.exports = override(
    addChunkName(),
    addWebpackModuleRule({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                },
            },
        ],
    }),
    addWebpackAlias({
        '@apis': path.resolve(__dirname, './src/apis'),
        '@actions': path.resolve(__dirname, './src/store/actions'),
        '@reducers': path.resolve(__dirname, './src/store/reducers'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@icon': path.resolve(__dirname, './src/assets/icon'),
        '@route': path.resolve(__dirname, './src/route'),
        '@component': path.resolve(__dirname, './src/component'),
        '@page': path.resolve(__dirname, './src/page'),
    })
);
