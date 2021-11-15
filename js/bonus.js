Vue.config.devtools = true;

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
    el: '#root',
    data: {
        title: 'Ciao a tutti miei paguri',
        altIMG: 'CiccioGamer89',
        urlIMG: 'https://ams3.digitaloceanspaces.com/sempionenews/2018/03/cicciogamer89-e1523431662617.jpg',
    }
})