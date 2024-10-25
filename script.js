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
    const els = document.querySelectorAll('p')

    els.forEach(el => {
        replacePrepositions(el)
    })


    for (let i = 1; i < 7; i++) {
        let r = document.querySelectorAll(`h${i}`)
        r.forEach(el => replacePrepositions(el))
    }

    const blockquote = document.querySelectorAll('blockquote')

    blockquote.forEach(el => {
        replacePrepositions(el)
    })

}

function replacePrepositions(text) {
    let oldText = text.innerHTML

    const prepositions = [
        "без", "в", "вместо", "вне", "для", "до", "за", "из", "из-за", "из-под", "к", "кроме", "между", "на", "над",
        "о", "об", "обо", "от", "перед", "передо", "по", "под", "подо", "при", "про", "ради", "с", "со", "сквозь", "среди",
        "у", "через", "благодаря", "вблизи", "вглубь", "вдоль", "взамен", "включая", "вместе с", "внутри", "внутрь",
        "вовнутрь", "возле", "вокруг", "вопреки", "впереди", "вплоть до", "вслед", "вслед за", "выключая", "для", "до",
        "за", "за исключением", "из-за", "изнутри", "из-под", "исключая", "к", "касательно", "ко", "кроме", "между", "на",
        "на благо", "на предмет", "на протяжении", "на случай", "наперекор", "наподобие", "насчет", "начиная с", "не",
        "невзирая на", "независимо от", "около", "от", "относительно", "перед", "передо", "плюс", "по", "по линии",
        "по мере", "по направлению к", "по отношению к", "по поводу", "по причине", "по случаю", "под", "под видом",
        "под эгидой", "подле", "позади", "помимо", "посередине", "после", "посреди", "превыше", "при", "применительно к",
        "про", "против", "путем", "ради", "с", "с ведома", "с целью", "сверх", "свыше", "согласно", "со", "согласно с",
        "спустя", "среди", "у", "через", "чрез", "и", "как", "но", "не"
    ];

    prepositions.forEach( el => {
        oldText = oldText.replaceAll(` ${el} `, ` ${el}&nbsp;`)
    })

    // 2. Делаем так, чтобы тире не висели
    oldText = oldText.replace(/\s+—/g, '&nbsp;—&nbsp;');

    // 3. Вставляем &shy; для переноса слов (например, длинных слов)
    // oldText = oldText.replace(/([а-яА-Я]{4,})([а-яА-Я])/g, '$1&shy;$2');

    text.innerHTML = oldText
}

function openPages() {
    const btn = document.querySelectorAll('.nav__button')
    const text = document.querySelectorAll('.page-main')

    btn.forEach((el, key) => {
        el.addEventListener('click', (e) => {
            btn.forEach(el => el.classList.remove('nav__button_active'))
            el.classList.add('nav__button_active')

            const footer = document.querySelector('.page-footer')

            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });

            setTimeout(()=> text.forEach(el => el.classList.add('page-main_to-hidden')), 1)
            setTimeout(()=> footer.classList.add('page-footer_hidden'), 1)
            setTimeout(() => text.forEach(el => el.classList.remove('page-main_active')), 300)
            setTimeout(() => text[key].classList.add('page-main_active'), 600)
            setTimeout(() => footer.classList.remove('page-footer_hidden'), 600)
            setTimeout(() => text[key].classList.remove('page-main_to-hidden'), 900)

            text[key].classList.add('page-main_active')
        })
    })
}