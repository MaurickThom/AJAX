const formularioUI = document.getElementById('formulario')
const listaActividadUI = document.getElementById('lista-actividades')
// const 
let arrayActividades = []

const crearItem = (actividad)=>{
    let item = {
        actividad : actividad,
        estado : false
    }
    arrayActividades.push(item)
    return item
}
const guardarDB = ()=>{
    localStorage.setItem('items',JSON.stringify(arrayActividades))
}
const containerEvent = container=>{
    container.addEventListener('submit',e=>{
        e.preventDefault()
        let texto = container.querySelector('#actividad')
        if(texto.value!==''){
            let actividad = crearItem(texto.value)
            guardarDB()
            formularioUI.reset()
            // console.log(elemento.innerHTML)
            listaActividadUI.innerHTML+=`
                <div>
                Actividad : ${actividad.actividad} , estado : ${actividad.estado}
                <span>Aprobar</span> : 
                <span>Borrar</span>
                </div>
            `
        }
    })
}
document.addEventListener('DOMContentLoaded',e=>{
    listaActividadUI.innerHTML=``
    arrayActividades=JSON.parse(localStorage.getItem('items'))
    if(arrayActividades===null){
        arrayActividades=[]
    }else{
        arrayActividades.forEach(element => {
            console.log(element)
            listaActividadUI.innerHTML+=`
                <div>
                Actividad : ${element.actividad} , estado : ${element.estado}
                <span>Aprobar</span> : 
                <span>Borrar</span>
                </div>
            `
        });
    }

})
containerEvent(document.getElementById('container'))