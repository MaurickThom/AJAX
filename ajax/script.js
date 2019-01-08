/**
 * Las posibilidades de hacer peticiones al servidor sin tener que volver a cargar la página
 */

// peiition HTTP al servidor
document.querySelector('#btn').addEventListener('click',e=>{
    console.log('Función activada')
    const xhttp = new XMLHttpRequest() //instanciando esta clase para poder realizar la peticion al servidor
    
    xhttp.open('GET','ajax/archivo.txt',true)
    xhttp.send()

    xhttp.onreadystatechange = ()=>{
        
    }
})