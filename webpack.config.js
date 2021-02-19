var path = require('path');

module.exports = {
  entry: './src/tts_index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {              
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tts.js',
    library: 'tts',
    libraryTarget: 'window'
  }
};
