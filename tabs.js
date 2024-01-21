let li = document.querySelectorAll('.tabli li')
let div = document.querySelectorAll('.content')

//sélectionner tous les li
li.forEach(function(item) {
    //ajouter un evenement click pour chaque élément de la boucle
    item.addEventListener('click' , function() { 
        //sélectionner tous les li et retirer la class tab-active
        li.forEach(function(li) {
            li.classList.remove('tab-active')
        })

        this.classList.add('tab-active')

        //sélectionner toutes les divs, et retirer la class active à tous les éléments
        div.forEach(function(div) {
            div.classList.remove('active')         
            }) 

            //faire 5 conditions qui vérifient que <li> contient dans ses classes la class tab-nomDeLaxe

            if(this.classList.contains('tab-1')) {
                let divFav1 = document.querySelector('.fav1')
                    //sélection de la div qui contient le nom de l'axe 
                    if(divFav1) {
                        // et lui ajouter la class active
                    divFav1.classList.add('active')
                    }             
                    

                } else if (this.classList.contains('tab-2')) {
                    let divFav2 = document.querySelector('.fav2')
                    if(divFav2) {
                        divFav2.classList.add('active')
                    }       
                    

                } else  if (this.classList.contains('tab-3')) {
                        let divFav3 = document.querySelector('.fav3')
                    if(divFav3) {
                            divFav3.classList.add('active')
                    } 
                    

                } else if(this.classList.contains('tab-4')) {
                        let divFav4 = document.querySelector('.fav4')
                    if(divFav4) {
                            divFav4.classList.add('active')
                    }
                    

                } else if(this.classList.contains('tab-5')) {
                        let divFav5 = document.querySelector('.fav5')
                    if(divFav5) {
                            divFav5.classList.add('active')
                    }

                }
                
    })
   
})