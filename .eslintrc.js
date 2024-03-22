module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2023,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: "detect"
		},
		"import/resolver": {
			typescript: true,
			node: {
				paths: ["src"],
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			}
		}
	},
	env: {
		browser: true,
		node: true
	},
	plugins: ["@stylistic/jsx"],
	extends: [
		"eslint:recommended",
		"plugin:@stylistic/all-extends",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/recommended"
	],
	ignorePatterns: ["package.json"],
	rules: {
		// Configuring "no-unused-vars" for TypeScript
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"],
		"@typescript-eslint/no-explicit-any": "off",
		"import/order": "error",
		"import/extensions": "error",
		"import/newline-after-import": "error",
		// More nice to replace the rule of stylistic
		"@stylistic/array-element-newline": ["error", "consistent"],
		"@stylistic/arrow-parens": ["error", "always"],
		"@stylistic/brace-style": "off",
		"@stylistic/comma-dangle": ["error", "never"],
		"@stylistic/dot-location": ["error", "property"],
		"@stylistic/function-call-argument-newline": ["error", "consistent"],
		"@stylistic/function-paren-newline": ["error", "consistent"],
		"@stylistic/implicit-arrow-linebreak": ["error", "beside"],
		"@stylistic/max-statements-per-line": ["error", { max: 2 }],
		"@stylistic/multiline-ternary": ["error", "always-multiline"],
		"@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],
		"@stylistic/no-extra-parens": "off",
		"@stylistic/no-tabs": "off",
		"@stylistic/object-curly-spacing": ["error", "always"],
		"@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
		"@stylistic/operator-linebreak": ["error", "before"],
		"@stylistic/padded-blocks": "off",
		"@stylistic/quote-props": ["error", "as-needed"],
		"@stylistic/quotes": ["error", "double"],
		"@stylistic/indent": ["error", "tab"],
		"@stylistic/semi": ["error", "always"],
		"@stylistic/space-before-function-paren": ["error", "always"],
		"@stylistic/spaced-comment": "off"
	}
};
