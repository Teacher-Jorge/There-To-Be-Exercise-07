let btnAfew = document.getElementById("btnAfew")
let btnAlot = document.getElementById("btnAlot")
let btnMuch = document.getElementById("btnMuch")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnAfew.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    answer.innerHTML = "a few"
    btnAfew.style.background = 'lime'
    answer.style.color = 'lime'
    btnAfew.disabled = 'true'
    btnAfew.disabled = 'true'
    btnAlot.disabled = 'true'
})

btnMuch.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    answer.innerHTML = 'much'
    btnMuch.style.background = 'red'
    answer.style.color = 'red'
    btnMuch.disabled = 'true'
})

btnAlot.addEventListener('click', function() {
    let audio = document.getElementById('wrong2')
    audio.play()
    answer.innerHTML = "a lot"
    answer.style.color = 'red'
    btnAlot.style.background = ' red'
    btnAlot.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Há algumas pessoas no cinema drive-in.'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate'
    }, 3000);
})



