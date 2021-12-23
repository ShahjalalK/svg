const checkBox = document.getElementById('cd')
const svg = document.getElementById('checkbox')

checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        svg.classList.add('reverse')
    } else {
        svg.classList.remove('reverse')
    }

})