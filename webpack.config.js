module.exports = {
    entry: {
        index: './dev/home.js',
        projects: './dev/projects.js',
        cv: './dev/cv.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: '/dist'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
        }
        ]
    }
}
