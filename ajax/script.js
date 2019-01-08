/**
 * Las posibilidades de hacer peticiones al servidor sin tener que volver a cargar la página
 */

// peiition HTTP al servidor
document.getElementById('btn').addEventListener('click',e=>{
    console.log('Función activada')
    // e.preventDefault()
    const xhttp = new XMLHttpRequest() //instanciando esta clase para poder realizar la peticion al servidor
    
    xhttp.open('GET','archivo.txt',true)

    xhttp.send()

    xhttp.onreadystatechange = function(){
        if(this.readyState=== 4 && this.status===200){
            console.log(this.responseText)
        }
    }
})