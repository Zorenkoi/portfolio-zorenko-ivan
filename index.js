const darkModeBtn = document.querySelector('.dark-mode-btn')

//проверяет системные настройки

let initialTheme = localStorage.getItem('theme')


if (initialTheme === 'dark'){
    setDarkTheme()

}else if (initialTheme === 'light'){
    setLightTheme()

}else if (window.matchMedia && window.matchMedia("(prefers-color-scheme): dark").matches ){
    setDarkTheme()

}else {
    setLightTheme()

}

//перебивает настройки если мы вручную установили тему


darkModeBtn.addEventListener('click', ()=>{
    const isDark = document.body.classList.toggle('dark')

    if(isDark){
        setDarkTheme()
    }else{
        setLightTheme()
    }
})

function setDarkTheme(){
    darkModeBtn.classList.add('active')
    document.body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
}

function setLightTheme(){
    darkModeBtn.classList.remove('active')
    document.body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
}