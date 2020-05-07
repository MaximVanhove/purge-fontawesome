const requireIcon = require.context('@fortawesome/free-regular-svg-icons', true, /fa(.*)\.js$/);

export const far = requireIcon.keys().map((fileName) => {
    const icon = requireIcon(fileName);
    return icon.definition || icon;
});
