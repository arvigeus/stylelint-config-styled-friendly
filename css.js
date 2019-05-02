module.exports = {
  defaultSeverity: "warning",
  plugins: [
    "stylelint-high-performance-animation",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-no-unsupported-browser-features"
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-a11y/recommended",
    "stylelint-config-prettier"
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-low-performance-animation-properties": true,
    "plugin/no-unsupported-browser-features": true
  }
};
