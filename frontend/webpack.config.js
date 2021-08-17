// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.ext$/,
          use: ['cache-loader', ...loaders],
          include: path.resolve('src'),
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: file => (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
          )
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              // Requires sass-loader@^7.0.0
              options: {
                implementation: require('sass'),
                indentedSyntax: true // optional
              },
              // Requires >= sass-loader@^8.0.0
              options: {
                implementation: require('sass'),
                sassOptions: {
                  indentedSyntax: true // optional
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
    ]
  }