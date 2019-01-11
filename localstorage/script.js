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
            listaActividadUI.innerHTML+=`
                <div>
                Actividad : ${actividad.actividad} , estado : ${actividad.estado}
                <span id="aprobar">Aprobar</span> : 
                <span id="borrar">Borrar</span>
                </div>
            `
        }
    })
    listaActividadUI.addEventListener('click',e=>{
        e.preventDefault()
        let i = e.target
        if(i.id==='aprobar'){
            console.log(i.textContent)
        }else if(i.id==='borrar'){

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
                <span id="aprobar">Aprobar</span> : 
                <span id="borrar">Borrar</span>
                </div>
            `
        });
    }

})
containerEvent(document.getElementById('container'))
