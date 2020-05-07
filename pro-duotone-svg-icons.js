const requireIcon = require.context('@fortawesome/pro-duotone-svg-icons', true, /fa(.*)\.js$/);

export const fad = requireIcon.keys().map((fileName) => {
    const icon = requireIcon(fileName);
    return icon.definition || icon;
});
