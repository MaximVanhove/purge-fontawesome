const requireIcon = require.context('@fortawesome', true, /fa(.*)\.js$/);

export const fontawesome = requireIcon.keys().map((fileName) => {
    const icon = requireIcon(fileName);
    return icon.definition || icon;
});
