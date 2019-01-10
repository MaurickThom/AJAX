const btnEvent = container=>{
    container.addEventListener('click',(e)=>{
        let element = e.target
        if(element.tagName==='BUTTON'){
            fetch('archivo.txt').
            then(data=>data.text()). // transformando a un archivo text
            then(data=>{
                console.log(data)
                let elementoInterno = container.querySelector('#parrafo')
                elementoInterno.innerHTML=``
                elementoInterno.innerHTML=`<p>${data}</p>`
                
            })

        }
    })
}


btnEvent(document.getElementById('container'))