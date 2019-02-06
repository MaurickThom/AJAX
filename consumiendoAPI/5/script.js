const form = document.getElementById('form')
const button = document.getElementById('button')
const filtrar = ()=>{
    console.log(form.value)
}
button.addEventListener('click',e=>{
    e.preventDefault()
    filtrar()
})