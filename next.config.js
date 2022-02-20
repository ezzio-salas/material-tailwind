const webpack = require('webpack');
const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
    future: {
        webpack5: true,
    },
    images:{
        disableStaticImages: true
    },
    webpack(config) {
        config.resolve.modules.push(path.resolve('./'));
        return config;
    },
});
