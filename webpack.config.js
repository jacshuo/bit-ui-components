// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const stylesHandler = 'style-loader';

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    // }),
    new ESLintPlugin({
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      eslintPath: require.resolve('eslint'),
      resolvePluginsRelativeTo: __dirname,
      context: resolveApp('src'),
      cache: true,
      cwd: resolveApp('.'),
      baseConfig: {
        extends: [require.resolve('eslint-config-react-app/base')],
        rules: {},
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
      chunkFilename: 'css/index.chunk,css',
    }),
    new CleanWebpackPlugin(),
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        include: resolveApp('src'),
        exclude: ['/node_modules/'],
        use: ['ts-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'dts-loader',
            options: {
              name: 'bitui', // The name configured in ModuleFederationPlugin
              // exposes: { // The exposes configured in ModuleFederationPlugin
              //   './Counter': './src/modules/Counter/Counter.component.tsx',
              // },
              // Optional, default is '.wp_federation'
              typesOutputDir: 'types',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // stylesHandler,
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  externals: {
    // Don't bundle react or react-dom
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
  }
  return config;
};
