export const required = value => {
    return value ? undefined : 'Поле не может быть пустым'
}

export const maxLeangth = (maxLeangth) => (value) => {
    if (value && value.length < maxLeangth) return undefined
    else return `Максимальная довжина текста ${maxLeangth}`
}