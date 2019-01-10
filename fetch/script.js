const btnEvent = container=>{
    container.addEventListener('click',(e)=>{
        let element = e.target
        if(element.id==='btn'){
            fetch('archivo.txt').
            then(data=>data.text()). // transformando a un archivo text
            then(data=>{
                console.log(data)
                let elementoInterno = container.querySelector('#parrafo')
                elementoInterno.innerHTML=``
                elementoInterno.innerHTML=`<p>${data}</p>`
                
            })
        }
        if(element.id==='fetch'){
            fetch('https://randomuser.me/api/').
            then(data=>data.json()). // transformando a un archivo text
            then(data=>{
                console.log(data)
                
            })
        }
    })
}


btnEvent(document.getElementById('container'))