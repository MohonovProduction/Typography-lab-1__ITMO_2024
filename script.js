document.addEventListener('DOMContentLoaded', () => {
    removePrepositionsFromEndOfLines()
})

function removePrepositionsFromEndOfLines() {
    const els = []

    els.concat(document.querySelectorAll('p'))
    for (let i = 1; i < 7; i++) {
        let r = document.querySelectorAll(`h${i}`)
        els.concat(r)
    }

    els.forEach(el => {
        replacePrepositions(el)
    })
}

function replacePrepositions(text) {
    // Регулярное выражение для предлогов
    const prepositions = /\b(в|на|у|за|к|с|о|под|над|по|из|об|от|до|без|для|про|через|при|со|обо)\s+/gi;

    // Замена пробела на неразрывный пробел &nbsp;
    return text.replace(prepositions, '$1&nbsp;');
}
