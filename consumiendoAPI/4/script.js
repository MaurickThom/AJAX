// let d= md5('Devnami Youtube Channel');
// console.log(d);
// estas llaves no son mias :v , las copie de otro men xdxdxd
const privateKey = '7c55664c217553d96ed6e84098a931dff0204776',
    publicKey = 'a71fa6c845e117349196fe9c4a58b2ae',
    content = document.getElementById('content'),
    search = document.getElementById('search')

const searchHero = name=>{
    const ts = Date.now(),
        hash = md5(ts+privateKey+publicKey),
        hero = encodeURIComponent(name),
        URL = `http://gateway.marvel.com/v1/public/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
    
    fetch(URL)
    .then(response=>response.json())
    .then(response=>{
        response.data.results.forEach(element => {
            drawHero(element)
        });
    })
}
const drawHero = hero=>{
    content.innerHTML+=`
        <div>
            <h3>${hero.name}</h3>
            <img src="${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}">
            <p>${hero.description}</p>
        </div>
    `
    // content.insertAdjacentHTML('beforeend',asdasd)
}
const getConnection = ()=>{
    const ts = Date.now(),
        hash = md5(ts+privateKey+publicKey),
        URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    
    fetch(URL)
    .then(response=>response.json())
    .then(response=>{
        response.data.results.forEach(element => {
            drawHero(element)
        });
    })
}
search.addEventListener('keyup',e=>{
    
    if(e.keyCode===13  ){
        searchHero(e.target.value.trim())

    }
    
})
getConnection()