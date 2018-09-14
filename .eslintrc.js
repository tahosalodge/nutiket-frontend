  module.exports = {
    parser: "babel-eslint",
    extends: ["airbnb", "plugin:prettier/recommended"],
    env: {
      browser: true,
    },
    rules: {
      'react/destructuring-assignment': 0,
      'no-underscore-dangle': ["error", {
        "allow": ["_id"]
      }],
    },
    settings: {
      'import/resolver': {
        node: {
          moduleDirectory: ['src/', 'node_modules/'],
        },
      },
    },
  };