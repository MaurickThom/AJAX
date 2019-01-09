const obtenerDatos = ()=>{
    let url = `https://mindicador.cl/api/dolar`
    const api = new XMLHttpRequest()
    api.open('GET',url,true)
    api.send()
    api.onreadystatechange = function(){
        if(this.status===200 && this.readyState===4){
            console.log(this.responseText)
        }
    }

}
document.getElementById('btn').addEventListener('click',e=>{
    obtenerDatos()
})