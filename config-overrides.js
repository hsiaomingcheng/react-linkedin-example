const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

const addChunkName = () => (config) => {
    config.output = {
        ...config.output,
        chunkFilename: '[name].[chunkhash].js',
    };
    return config;
};

module.exports = override(
    addChunkName(),
    addWebpackAlias({
        '@assets': path.resolve(__dirname, './src/assets'),
        '@route': path.resolve(__dirname, './src/route'),
        '@component': path.resolve(__dirname, './src/component'),
        '@page': path.resolve(__dirname, './src/page'),
    })
);
