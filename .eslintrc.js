module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended", 
        "eslint:recommended"
        ],
    "settings": {
        "react": {
            "version": "detect" // detect react version
        }
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "import/no-extraneous-dependencies": [
            "error", {
               "devDependencies": true
            }
        ]
    
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
        "react/destructuring-assignment": "off",
        "no-unused-vars": "off", 
    }, 

};
