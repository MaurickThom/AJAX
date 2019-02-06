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
    },
    {
        nombre:'Manzana',
        valor : 500
    },
    {
        nombre:'Papaya',
        valor : 500 
    },
    {
        nombre:'Totonga',
        valor : 500
    },
    {
        nombre:'Mandarina',
        valor : 500 
    }
]
const filtrar = ()=>{
    // console.log(form.value)
    const text = form.value.toLowerCase().trim()
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
filtrar() // al comenzar la aplicacion como no se ele insertó nada sera vacio, entonces ese vacio es null y se pregunta si ese nulo es algun indice del nombre y retorna 0 por lo que se dibuja