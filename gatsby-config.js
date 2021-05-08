module.exports = {
  siteMetadata: {
    title: "Benjamin",
  },
  plugins: [`gatsby-plugin-emotion`,
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `q318jvnqg8iw`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: `WfElOBLFYJxrYD1KRizRSQLb5G9l5NkmWtelQmqGC8g`,
      environment: `master`
    },
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: "gatsby-plugin-prettier-eslint",
    // this is the default configuration, override only what you need
    options: {
      cwd: process.cwd(), // path to a directory that should be considered as the current working directory
      watch: true, // format/lint on save
      initialScan: true, // if true, will format/lint the whole project on Gatsby startup
      onChangeFullScanLint: false, // if true, on file save always perform full scan lint
      onChangeFullScanFormat: false, // if true, on file save always perform full scan format
      prettierLast: false, // if true, will run Prettier after ESLint
      ignorePatterns: [
        "**/node_modules/**/*",
        "**/.git/**/*",
        "**/dist/**/*",
        ".cache/**/*",
        "public/**/*",
      ], // string or array of paths/files/globs to ignore
      prettier: {
        patterns: [], // string or array of paths/files/globs to include related only to Prettier
        ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
        customOptions: {}, // see: https://prettier.io/docs/en/options.html
      },
      eslint: {
        patterns: [
          "**/*.{css,scss,less}",
          "**/*.{json,json5}",
          "**/*.{graphql}",
          "**/*.{md,mdx}",
          "**/*.{html}",
          "**/*.{yaml,yml}",
        ], // string or array of paths/files/globs to include related only to ESLint
        ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
        formatter: "stylish", // set custom or third party formatter
        maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
        emitWarning: true, // if true, will emit lint warnings
        failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
        failOnWarning: false, // same as failOnError but for warnings
        plugins: [], // an array of plugins to load for ESLint
        customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
      },
    },
  },
  ],
};
