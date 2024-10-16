document.addEventListener('DOMContentLoaded', () => {
    load()
    removePrepositionsFromEndOfLines()
    openPages()
})

function load() {
    const loader = document.querySelector('.page-loader')
    const line = loader.querySelector('.page-loader__line')

    setTimeout(() => line.classList.add('page-loader__line_loaded'), 1)
    setTimeout(() => loader.classList.add('page-loader_disable'), 3010)
    setTimeout(() => loader.classList.add('page-loader_removed'), 4010)

}

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

function openPages() {
    const btn = document.querySelectorAll('.nav__button')
    const text = document.querySelectorAll('.page-main')

    btn.forEach((el, key) => {
        el.addEventListener('click', (e) => {
            btn.forEach(el => el.classList.remove('nav__button_active'))
            el.classList.add('nav__button_active')

            setTimeout(()=> text.forEach(el => el.classList.add('page-main_to-hidden')), 1)
            setTimeout(() => text.forEach(el => el.classList.remove('page-main_active')), 300)
            setTimeout(() => text[key].classList.add('page-main_active'), 600)
            setTimeout(() => text[key].classList.remove('page-main_to-hidden'), 900)

            text[key].classList.add('page-main_active')
        })
    })
}