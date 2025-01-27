// creo il mio arrey di oggetti
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
       "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// recupero il mio elemento dal dom
let container_card = document.getElementById('container');
// creo un ciclo che mi stampi le card nel dom
posts.forEach((element) =>{
    // faccio una destrutturazione
    let {media, author, created, likes, content, id} = element;
    // mostro le mie card nel dom
    container_card.innerHTML += ` <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${(author.image)}" alt="">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${(author.name)}</div>
                <div class="post-meta__time">${created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${content}</div>
    <div class="post__image">
        <img src="${media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`

});

// creo il mio arrey per i like
const like = [];

// recupero il mio pulsante dal dom
const likes_button = document.querySelectorAll('.js-like-button');
// recupero il mio counter like
const likes__counter = document.querySelectorAll('.js-likes-counter')
//  creo un ciclo per i pulsanti mi piace
for(let i = 0; i < likes_button.length; i++){
    let button = likes_button[i];
// faccio un evento click per il mio pulsante mi piace
    button.addEventListener('click', function (event) {
        // evito che al click del pulsante mi riporta all'inizio della pagina
        event.preventDefault();
        // aggiungo la classe al mio pulsante
       this.classList.add('like-button--liked')
       let like_dom = likes__counter[i];
         // recupero il numero dei miei mi piace
       let likes = parseInt(like_dom.innerText);
        //   inserisco il nuovo numero di mi piace nel dom
       like_dom.innerText = likes + 1;
        // inserisco l'id nel mio arrey 
       like.push( i + 1);
       console.log(like);
})
}


