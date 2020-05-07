const requireIcon = require.context('@fortawesome/pro-light-svg-icons', true, /fa(.*)\.js$/);

export const fal = requireIcon.keys().map((fileName) => {
    const icon = requireIcon(fileName);
    return icon.definition || icon;
});
