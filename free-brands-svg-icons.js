const requireIcon = require.context('@fortawesome/free-brands-svg-icons', true, /fa(.*)\.js$/);

export const fab = requireIcon.keys().map((fileName) => {
    const icon = requireIcon(fileName);
    return icon.definition || icon;
});
