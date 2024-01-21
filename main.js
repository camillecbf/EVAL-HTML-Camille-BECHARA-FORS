

let title = document.getElementById('title')
console.log(title)
title.innerHTML = "IIM"
console.log(title.innerHTML)



let title2 = document.querySelector('#main-title')   
title2.addEventListener ('click' , function() {
    this.classList.add('red') // ou this.classList.toggle
    console.log('classe ajoutée')
})


let accordions = document.querySelectorAll(".accordeon")
accordions.forEach(function(item) {
    //lorsqu'on clique sur l'élément
    item.addEventListener('click', function(){
        this.classList.toggle('open')
    })
})

//dark mode
let dark = document.querySelector('.darkmode') 
//lorsqu'on clique sur darkmode  
dark.addEventListener ('click' , function() {
    //sélectionner le body et activer la class en css
    document.body.classList.toggle('darkmode') 
})

dark.addEventListener('click', function() {
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('darkmode')
})


dark.addEventListener('click', function() {
    let header = document.querySelector('.texte')
    header.classList.toggle('darkmode')
})

