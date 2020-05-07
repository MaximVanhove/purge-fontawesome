const requireIcon = require.context('@fortawesome/pro-solid-svg-icons', true, /fa(.*)\.js$/);

export const fas = requireIcon.keys().map((fileName) => {
    const icon = requireIcon(fileName);
    return icon.definition || icon;
});
