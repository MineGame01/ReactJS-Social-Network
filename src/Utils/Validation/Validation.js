export const required = value => {
    return value ? undefined : 'Field cannot be empty!'
}

export const maxLeangth = (maxLeangth) => (value) => {
    if (value && value.length < maxLeangth) return undefined
    else return `Maximum text length ${maxLeangth}!`
}