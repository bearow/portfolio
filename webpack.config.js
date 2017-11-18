module.exports = {
    entry: './src/App.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"]
    },
    module: {
      loaders: [
          { 
            test: /\.tsx$/, 
            loader: 'ts-loader',
            exclude: /node_modules/ 
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true
                  }
              }
            ]
        }
      ]
    }
  }