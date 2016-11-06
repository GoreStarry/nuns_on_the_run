module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true
    }
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
    "react"
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      },
      "react": {
        "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
        "pragma": "React", // Pragma to use, default to "React"
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

