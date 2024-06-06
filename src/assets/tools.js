export function urlToKebabCase(url) {
    let decodedStr = decodeURIComponent(url)
    let lowerStr = decodedStr.toLowerCase()
    let cleanStr = lowerStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, '')
    let kebabCaseStr = cleanStr.replace(/\s+/g, '-')

    return kebabCaseStr;
}

export function kebabToCamelCase(kebab) {
    if (kebab) {
        let words = kebab.split('-')
        for (let i = 1; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        }
        let camelCaseStr = words.join('')

        return camelCaseStr
    }
    return ""
}