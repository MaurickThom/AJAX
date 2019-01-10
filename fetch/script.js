const btnEvent = container=>{
    container.addEventListener('click',(e)=>{
        let element = e.target
        if(element.tagName==='BUTTON'){
            fetch('archivo.txt').
            then(data=>data.text()). // transformando a un archivo text
            then()

        }
    })
}


btnEvent(document.getElementById('container'))