const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const getContent = function (paths) {
    return paths.reduce((contents, fileName) => {
        return contents.concat(fs.readFileSync(fileName, 'utf8'));
    }, '');
};

const isResourceFaIcon = function (resource) {
    return (new RegExp('(.*)(/fa)(.*)(.js)$')).test(resource);
}

const isNotResourceFaIcon = function (resource) {
    return !isResourceFaIcon(resource);
}

const getCheckResource = function (paths) {
    const content = getContent(paths);

    function contentContains(str) {
        return content.indexOf(str) !== -1;
    }

    return function (resource, dir) {
        const doIgnore = true;
        const doNotIgnore = false;

        if (isNotResourceFaIcon(resource)) {
            return doNotIgnore;
        }

        const resourcePath = path.join(dir, resource);
        const icon = require(resourcePath);

        if (contentContains(icon.iconName)) {
            return doNotIgnore;
        }

        if (contentContains('/' + icon.unicode)) {
            return doNotIgnore;
        }

        if (contentContains('/' + icon.unicode)) {
            return doNotIgnore;
        }

        return doIgnore;
    }
}

class PurgeFontawesomePlugin extends webpack.IgnorePlugin {
    constructor(options) {
        const { paths } = options;

        super({ checkResource: getCheckResource(paths) });
    }
}

module.exports = PurgeFontawesomePlugin;
