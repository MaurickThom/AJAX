const obtenerDatos = ()=>{
    let url = `https://mindicador.cl/api/dolar`
    const api = new XMLHttpRequest()
    api.open('GET',url,true)
    api.send()
    api.onreadystatechange = function(){
        if(this.status===200 && this.readyState===4){
            let json = JSON.parse(this.responseText)
            console.log(json.serie)
        }
    }

}
document.getElementById('btn').addEventListener('click',e=>{
    // obtenerDatos()
    (()=>{
        let url = `https://mindicador.cl/api/dolar`
        const api = new XMLHttpRequest()
        api.open('GET',url,true)
        api.send()
        api.onreadystatechange = function(){
            if(this.status===200 && this.readyState===4){
                let json = JSON.parse(this.responseText).serie
                console.log(json)
                let elemento = document.getElementById('api')
                elemento.innerHTML=''
                json.map(e => {
                    elemento.innerHTML+=`
                        <li>
                            ${e}
                        </li>
                    `
                })
                
            }
        }
    })()
});

// // funciones autoejecutables necesita un ; al final de cada funcion
// ((nombre)=>{
//     console.log(`Hola  ${nombre}`);
// })('Thom');