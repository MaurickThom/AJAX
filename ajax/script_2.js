document.getElementById('json').addEventListener('click',e=>{
    const xhttp = new XMLHttpRequest()

    xhttp.open('GET','catalogo.json',true)
    xhttp.send()

    xhttp.onreadystatechange = function (){
        if(this.readyState===4 && this.status===200){
            console.log(JSON.parse(this.responseText))
        }
    }
})
console.log("sincronizado")