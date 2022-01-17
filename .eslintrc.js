module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser

  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
  ],

  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },

  rules: {
    "no-unsafe-optional-chaining": [
      "error",
      { disallowArithmeticOperators: true },
    ],

    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unstable-nested-components": ["error", { allowAsProps: false }],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],

    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/array-type": ["error", { arraySimple: true }],
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/prefer-ts-expect-error": "error",
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  ignorePatterns: ["node_modules/*", "dist/*"],
};
