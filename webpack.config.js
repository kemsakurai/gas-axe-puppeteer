const path = require("path");
const GasPlugin = require("gas-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const moduleToCdn = require('module-to-cdn');

// our destination directory
const destination = path.resolve(__dirname, 'dist');

const isProd = process.env.NODE_ENV === 'production';

// define client entry points and output names
const clientEntrypoints = [
  {
    name: 'CLIENT - SideBar',
    entry: './src/ui/sidebar/index.tsx',
    filename: 'sidebar', // we'll add the .html suffix to these
    template: './src/ui/sidebar/index.html',
  }
]

// DynamicCdnWebpackPlugin settings
// these settings help us load 'react', 'react-dom' and the packages defined below from a CDN
// see https://github.com/enuchi/React-Google-Apps-Script#adding-new-libraries-and-packages
const DynamicCdnWebpackPluginConfig = {
  // set "verbose" to true to print console logs on CDN usage while webpack builds
  verbose: false,
  resolver: (packageName, packageVersion, options) => {
    const packageSuffix = isProd ? '.min.js' : '.js';
    const moduleDetails = moduleToCdn(packageName, packageVersion, options);
    if (moduleDetails) {
      return moduleDetails;
    }
    // "name" should match the package being imported
    // "var" is important to get right -- this should be the exposed global. Look up "webpack externals" for info.
    switch (packageName) {
      case 'react-transition-group':
        return {
          name: packageName,
          var: 'ReactTransitionGroup',
          version: packageVersion,
          url: `https://unpkg.com/react-transition-group@${packageVersion}/dist/react-transition-group${packageSuffix}`,
        };
      case 'react-bootstrap':
        return {
          name: packageName,
          var: 'ReactBootstrap',
          version: packageVersion,
          url: `https://unpkg.com/react-bootstrap@${packageVersion}/dist/react-bootstrap${packageSuffix}`,
        };
      default:
        return null;
    }
  },
};
// webpack settings used by both client and server
const sharedClientAndServerConfig = {
  context: __dirname,
};

// webpack settings used by all client entrypoints
const clientConfig = {
  ...sharedClientAndServerConfig,
  mode: isProd ? 'production' : 'development',
  output: {
    path: destination,
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      // typescript config
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // we could add support for scss here
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

// webpack settings used by each client entrypoint defined at top
const clientConfigs = clientEntrypoints.map(clientEntrypoint => {
  return {
    ...clientConfig,
    name: clientEntrypoint.name,
    entry: clientEntrypoint.entry,
    plugins: [
      new HtmlWebpackPlugin({
        template: clientEntrypoint.template,
        filename: `${clientEntrypoint.filename}.html`,
        inlineSource: '^[^(//)]+.(js|css)$', // embed all js and css inline, exclude packages with '//' for dynamic cdn insertion
      }),
      // add the generated js code to the html file inline
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
      // this plugin allows us to add dynamically load packages from a CDN
      new DynamicCdnWebpackPlugin(DynamicCdnWebpackPluginConfig),
    ],
  };
});

module.exports = [{
  mode: "development",
  entry: "./src/index.ts",
  devtool: false,
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          ecma: 6,
          warnings: false,
          parse: {},
          compress: {
            properties: false,
          },
          mangle: false,
          module: false,
          output: {
            beautify: true,
          },
        },
      }),
    ],
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new GasPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html"
    }),
    ],
  },
  ...clientConfigs,
];
