module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        indent: ["warn", 4],
        "linebreak-style": "off",
        quotes: ["warn", "double"],
        semi: ["error", "always"]
    }
};
