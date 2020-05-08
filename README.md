# Purge Fontawesome

This webpack plugin allows you to import all icons at once, while Purge Fontawesome will remove all unused icons.

## Requirements

`webpack >= 4`

## Installation

Install Purge Fontawesome

```
npm install purge-fontawesome --save-dev
```

Install Fontawesome svg core

```
npm install @fortawesome/fontawesome-svg-core
```

Install any icon set you need

```
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/pro-duotone-svg-icons
npm install @fortawesome/pro-light-svg-icons
npm install @fortawesome/pro-regular-svg-icons
npm install @fortawesome/pro-solid-svg-icons
```

## Usage

Import the core as usual. The icons should be imported trough Purge Fontawesome.

`index.js`

```js
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { far } from 'purge-fontawesome/free-regular-svg-icons'; // Requires @fortawesome/free-regular-svg-icons

library.add(far);

dom.watch();
```

`index.html`

```html
<i class="fas fa-smile"></i>
```

Include the webpack plugin in your webpack configuration

`webpack.config.js`

```js
const path = require('path');
const glob = require('glob');
const PurgeFontawesomePlugin = require('purge-fontawesome/webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new PurgeFontawesomePlugin({
            paths: [
                glob.sync(path.join(__dirname, 'src/**/*'),  { nodir: true }),
            ],
        }),
    ],
};
```

Boom! Your now over 1MB bundle has been reduced to ~50kb.

## Require all installed sets at once

Purge Fontawesome will find all installed sets and require them for you

```js
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fontawesome } from 'purge-fontawesome/fontawesome-svg-icons';

library.add(fontawesome);

dom.watch();
```

## Require each set separately

### Free sets

```js
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from 'purge-fontawesome/free-brands-svg-icons'; // Requires @fortawesome/free-brands-svg-icons
import { far } from 'purge-fontawesome/free-regular-svg-icons'; // Requires @fortawesome/free-regular-svg-icons
import { fas } from 'purge-fontawesome/free-solid-svg-icons'; // Requires @fortawesome/free-solid-svg-icons

library.add(fab, far, fas);

dom.watch();
```

### Pro sets

```js
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fad } from 'purge-fontawesome/pro-duotone-svg-icons'; // Requires @fortawesome/pro-duotone-svg-icons
import { fal } from 'purge-fontawesome/pro-light-svg-icons'; // Requires @fortawesome/pro-light-svg-icons
import { far } from 'purge-fontawesome/pro-regular-svg-icons'; // Requires @fortawesome/pro-regular-svg-icons
import { fas } from 'purge-fontawesome/pro-solid-svg-icons'; // Requires @fortawesome/pro-solid-svg-icons

library.add(fad, fal, far, fas);

dom.watch();
```

## CSS Pseudo-elements

This plugin also scans for css pseudo elements.

```html
<style>
    .icon::before {
        display: none;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
    }

    .login::before {
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f007";
    }
</style>

<span class="icon login"></span>
```

## Options

### Source paths

Add the paths you want to scan

```js
new PurgeFontawesomePlugin({
    paths: glob.sync(path.join(__dirname, 'src/**/*'),  { nodir: true }),
}),
```

### Multiple paths

```js
new PurgeFontawesomePlugin({
    paths: [
        glob.sync(path.join(__dirname, 'src/**/*'),  { nodir: true }),
        glob.sync(path.join(__dirname, 'styles/**/*'),  { nodir: true }),
    ],
}),
```

### Specific extensions

Using specific extensions can speed up the scan process

```js
new PurgeFontawesomePlugin({
    paths: glob.sync(path.join(__dirname, 'src/**/*.html'),  { nodir: true }),
}),

new PurgeFontawesomePlugin({
    paths: glob.sync(path.join(__dirname, 'src/**/*.{html,js}'),  { nodir: true }),
}),
```

## Author

Maxim Vanhove
Web developer at [Starring Jane](https://starringjane.com)

[![Twitter Follow](https://img.shields.io/twitter/follow/MrMaximVanhove.svg?style=social&logo=twitter&label=Follow)](https://twitter.com/MrMaximVanhove)
