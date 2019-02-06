const form = document.getElementById('form')
const button = document.getElementById('button')
const items = document.getElementById('items')
const productos=[
    {
        nombre:'Platanos',
        valor : 500
    },
    {
        nombre:'Pera',
        valor : 500 
    },
    {
        nombre:'Sandia',
        valor : 500
    },
    {
        nombre:'Melon',
        valor : 500 
    }
]
const filtrar = ()=>{
    // console.log(form.value)
    const text = form.value.toLowerCase()
    items.innerHTML=``
    productos.forEach(producto=>{
        let nombre = producto.nombre.toLowerCase()
        // console.log(nombre)
        if(nombre.indexOf(text)!==-1){
            items.innerHTML+=`<li>${producto.nombre}-${producto.valor}</li>`
        }
        
    })
    if(items.innerHTML===''){
        items.innerHTML=`<p>Elemento no encontrado</p>`
    }
}
button.addEventListener('click',e=>{
    e.preventDefault()
    filtrar()
})
form.addEventListener('keyup',filtrar)
filtrar()