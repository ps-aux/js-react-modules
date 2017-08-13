export const createClass = (original, provided) => {
    const classes = [original, 'basic-comp']
    if (provided)
        classes.unshift(provided)

    return classes.join(' ')
}