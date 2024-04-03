var menuLateral = document.getElementById('list')
var iconAbrir = document.getElementById('iconAbrir')
var iconFechar = document.getElementById('fechar')
var linkLateral = document.getElementById('linkLateral')


iconAbrir.addEventListener('click', function(){
    // menuLateral.style.width = '200px'
    linkLateral.style.display = 'block'
    iconFechar.style.display = 'block'
    iconAbrir.style.display = 'none'
})

iconFechar.addEventListener('click', function(){
    // menuLateral.style.width = '40'
    linkLateral.style.display = 'none'
    iconFechar.style.display = 'none'
    iconAbrir.style.display = 'block'
})