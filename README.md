# stylelint-config-styled-friendly

This package includes shareable Stylelint config based on `stylelint-config-standard` and [idiomatic-css](https://github.com/necolas/idiomatic-css#declaration-order). For best results, use a [browserslist file](https://github.com/browserslist/browserslist) to avoid using CSS properties that are not supported by the browsers you are targeting.

### General guidelines:

- Linting must not step in developer's way. Configuration should require minimum effort with no-frills, out of the box experience.
- Errors should only be used to eliminate potential bugs or invalid code.
- Warnings must only be for code that can be improved. Ideally fixing them will be linting tool's job.
- All formatting and stylistic choices should be done by `prettier`. This could be handled automatically by the editor itself, or the CI pipeline.
- If given code practice is discouraged, it should be warning at most.

### Install

```
npm install --save-dev stylelint-config-styled-friendly
```

Config:

```
// .stylelintrc.json
{
  extends: "stylelint-config-styled-friendly"
}
```

### React Native

Config:

```
// .stylelintrc.json
{
  extends: "stylelint-config-styled-friendly/native"
}
```

### Known issues

- Fixing css files causes their content to disappear due to [stylelint-processor-styled-components#187](https://github.com/styled-components/stylelint-processor-styled-components/issues/187). For CSS only config:

```
// .stylelintrc.json
{
  extends: "stylelint-config-styled-friendly/css"
}
```

- Auto ordering properties is not working in css-in-js due to [stylelint-order#76](https://github.com/hudochenkov/stylelint-order/issues/76). Support is marked as _experimental_.
