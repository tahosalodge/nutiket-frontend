  module.exports = {
    parser: "babel-eslint",
    extends: ["airbnb", "plugin:prettier/recommended"],
    env: {
        browser: true,
    },
    rules: {},
    settings: {
      'import/resolver': {
        node: {
          moduleDirectory: ['src/', 'node_modules/'],
        },
      },
    },
  };
