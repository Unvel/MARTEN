const ru = document.querySelector('.ru')
const en = document.querySelector('.eng')
const gr = document.querySelector('.gr')

const ruBlock = document.querySelector('#ru')
const enBlock = document.querySelector('#eng')
const grBlock = document.querySelector('#gr')

ru.addEventListener('click', ()=> {
    enBlock.style.display = 'none'
    grBlock.style.display = 'none'
    ruBlock.style.display = 'block'
    ru.style.textDecoration = 'underline'
    en.style.textDecoration = 'none'
    gr.style.textDecoration = 'none'
})

en.addEventListener('click', ()=> {
    enBlock.style.display = 'block'
    grBlock.style.display = 'none'
    ruBlock.style.display = 'none'
    ru.style.textDecoration = 'none'
    en.style.textDecoration = 'underline'
    gr.style.textDecoration = 'none'
})

gr.addEventListener('click', ()=> {
    enBlock.style.display = 'none'
    grBlock.style.display = 'block'
    ruBlock.style.display = 'none'
    ru.style.textDecoration = 'none'
    en.style.textDecoration = 'none'
    gr.style.textDecoration = 'underline'

})