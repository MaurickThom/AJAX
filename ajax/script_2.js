document.getElementById('json').addEventListener('click',e=>{
    const xhttp = new XMLHttpRequest()

    xhttp.open('GET','catalogo.json',true)
    xhttp.send()

    xhttp.onreadystatechange = function (){
        if(this.readyState===4 && this.status===200){
            let arr =JSON.parse(this.responseText).catalogo.slice()
            
            let element = document.getElementById('rest')
            element.innerHTML=``
            arr.map(e=>{
                element.innerHTML+=`
                <tr>
                    <td>${e.titulo}</td>
                    <td>${e.artista}</td>
                </tr>`
            })
        }
    }
})