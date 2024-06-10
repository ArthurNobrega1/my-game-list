export function nomeToKebabCase(nome) {
    let decodedStr = decodeURIComponent(nome)
    let lowerStr = decodedStr.toLowerCase()
    let cleanStr = lowerStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s-]/gi, '')
    let kebabCaseStr = cleanStr.replace(/[\s-]+/g, '-')

    return kebabCaseStr
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

export function camelToKebabCase(camelCaseStr) {
    return camelCaseStr
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1-$2')
        .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
        .toLowerCase()
}

export function verMais(setGamesVisiveis, games, id) {
    const buttonVerMais = document.getElementsByClassName('verMais')[id]
    if (buttonVerMais) {
        if (buttonVerMais.innerText === "Ver mais...") {
            setGamesVisiveis(games)
            buttonVerMais.innerText = "Mostrar menos"
        }
        else {
            setGamesVisiveis(games.slice(0,5))
            buttonVerMais.innerText = "Ver mais..."
        }
    }
}