class Usuario{
    constructor(nombre,email,edad){
        this.nombre=nombre
        this.email=email
        this.edad=edad
    }
}
const openUsuarios = container =>{
    let nom = container.querySelector('#nombre'),
        email = container.querySelector('#email'),
        edad = container.querySelector('#edad')
    // return {
    //     nombre : nom.value,
    //     email: email.value,
    //     edad: edad.value
    // }
    return new Usuario(nombre.value,email.value,edad.value)
}

const openUsuariosEvent = container=>{
    container.addEventListener('submit',e=>{
        e.preventDefault()
        console.log(openUsuarios(container))
    })
}

openUsuariosEvent(document.getElementById('formulario'))