module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader", // Injects styles into DOM
            "css-loader",   // Turns CSS into JS
            "sass-loader",  // Compiles Sass to CSS
          ],
        },
      ],
    },
  };
  