module.exports = {
  defaultSeverity: "warning",
  processors: ["stylelint-processor-styled-components"],
  plugins: [
    "stylelint-high-performance-animation",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-no-unsupported-browser-features",
    "stylelint-react-native"
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-idiomatic-order",
    "stylelint-a11y/recommended",
    "stylelint-config-prettier"
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-low-performance-animation-properties": true,
    "plugin/no-unsupported-browser-features": true,
    "react-native/css-property-no-unknown": [true, { severity: "error" }],
    "react-native/font-weight-no-ignored-values": true,
    "react-native/style-property-no-unknown": [true, { severity: "error" }]
  },
  syntax: "css-in-js"
};
