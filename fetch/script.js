const btnEvent = container=>{
    container.addEventListener('click',(e)=>{
        let element = e.target
        if(element.id==='btn'){
            fetch('archivo.txt').
            then(data=>data.text()). // transformando a un archivo text
            then(data=>{
                console.log(data)
                let elementoInterno = container.querySelector('#parrafo')
                elementoInterno.innerHTML=`<p>${data}</p>`
                
            })
        }
        if(element.id==='fetch'){
            fetch('https://randomuser.me/api/').
            then(data=>data.json()). // transformando a un archivo text
            then(data=>{
                let user = data.results[0]
                console.log(user)
                let elementoIner = container.querySelector('#container-user__captura')
                elementoIner.innerHTML=`
                    <img src = "${user.picture.thumbnail}">
                    <p>${user.name.first}</p>
                `
                console.log(elementoIner)
            })
        }
    })
}


btnEvent(document.getElementById('container'))