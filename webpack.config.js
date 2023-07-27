const path = require('path')

mode = 'development'

module.exports = {
  entry: './src/htmlParser.ts',
  output: {
    filename: 'htmlParser.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'AA': path.resolve(__dirname, 'src/')
    }
  }
}
