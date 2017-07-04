[![NPM version](https://img.shields.io/npm/v/express-open-in-editor.svg)](https://www.npmjs.com/package/express-open-in-editor)
[![Dependency Status](https://img.shields.io/david/lahmatiy/express-open-in-editor.svg)](https://david-dm.org/lahmatiy/express-open-in-editor)

Express extension to open any file in an editor. Based on [open-in-editor](https://github.com/lahmatiy/open-in-editor).

## Install

```
npm install express-open-in-editor
```

## Usage

```js
var express = require('express');
var openInEditor = require('express-open-in-editor');

var app = express();

app.use(openInEditor());

// ...
```

After that you can use GET requests like `/open-in-editor?file=foo/bar.ext:2:5` to open `foo/bar.ext` in an editor at line 2 column 5.

By default extension uses `process.env.VISUAL` or `process.env.EDITOR` (with this priority) to get the command to open file in an editor. It could be set globally or with main script:

```
EDITOR=subl node app.js
```

Also you can set `process.env.OPEN_FILE` that has highest priority and understands shorthands (i.e. `subl` for `Sublime Text` or `atom` for `Atom Editor`).

For more details about editor setup see [open-in-editor](https://github.com/lahmatiy/open-in-editor).

### Using with webpack-dev-server

Although `webpack-dev-server` uses `express` to create server, you can't use `app.use()` to apply extension. Instead you should define it in `setup` method (see [issue](https://github.com/webpack/webpack-dev-server/issues/285) for details).

```js
var server = new WebpackDevServer(webpack(config), {
  // ...
  setup: function(app) {
    app.use(openInEditor());
  }
});
```

## API

```
openInEditor([options]);
```

### options

#### url

Type: `String`

Default: `/open-in-editor`

Request to this path triggers middleware.

#### editor

Type: `String`

Values: `sublime`, `atom`, `code`

Default: *not set*

Editor to open files. Option accepts one of preset values. When value is set, extension tries to detect command to launch an editor.

Supported editors:

- `sublime` – Sublime Text
- `atom` – Atom Editor
- `code` – Visual Studio Code

#### cmd

Type: `String`

Default: *not set*

Command to launch an editor. This option overrides whatever is set in `editor` option.

Command could contain placeholders that will be replaced with actual values. Supported placeholders: `filename`, `line` and `column`.

```js
app.use(openInEditor({
  cmd: 'code -r -g {filename}:{line}:{column}'
}));
```

If no `{filename}` placeholder is present, then `{filename}:{line}:{column}` is appended to the value of this option. That way previous example could be simplified:

```js
app.use(openInEditor({
  cmd: 'code -r -g'
}));
```

## Related projects

- [open-in-editor](https://github.com/lahmatiy/open-in-editor) – package that do the main task of `express-open-in-editor`, i.e. opens file in editor.
- [babel-plugin-source-wrapper](https://github.com/restrry/babel-plugin-source-wrapper) – `Babel` plugin that instruments source code to associate objects with location they defined in code base.
- [Component Inspector](https://github.com/lahmatiy/component-inspector) – developer tool to inspect components that can open component creation source location in editor. Has integrations for `React`, `Backbone` and can be adopter for other frameworks.

## License

MIT
