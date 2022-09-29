module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "standard",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "import"],
    rules: {
        indent: [0, "tab"],
        quotes: [2, "double"],
        "no-tabs": 0,
        semi: [2, "always"],
        curly: [2, "all"],
        "import/no-unresolved": 0,
        "import/named": 0,
        "no-undef": 0,
        "no-unused-vars": 0,
        "object-shorthand": 0,
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "prefer-const": 0,
        "react/no-unescaped-entities": 0,
        "no-unneeded-ternary": 0,
        "dot-notation": 0,
        camelcase: 0,
    },
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ["@components", "./src/components"],
                    ["@pages", "./src/pages"],
                    ["@configs", "./src/configs"],
                    ["@layout", "./src/layout"],
                    ["@services", "./src/services"],
                    ["@helpers", "./src/helpers"],
                    ["@assets", "./src/assets"],
                ],
                extensions: [".ts", ".js", ".jsx", ".json"],
            },
        },
    },
};
