import { Configuration } from 'webpack'
import * as path from 'path'
import CopyPlugin from 'copy-webpack-plugin'
const srcDir = path.join(__dirname, 'src')

const config: Configuration = {
  entry: {
    main: path.join(srcDir, 'main.ts'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }],
      options: {},
    }),
  ],
}

export default config
