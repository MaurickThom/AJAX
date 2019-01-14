// alert('Hola marvel')
// estas llaves se utilizará para las peticiones 

const privateKey = '06eb46803dff88ff074014850f23bc0bdb55fca4',
    publicKey = 'af22973d494d692ad4119c57f8694119',
    content=document.getElementById('content')

// Método para la conexión

const getConnection = ()=>{

    // se deberan pasar dos parametros
    
    //esta variable lo pide la API 
    const ts = Date.now() // marca de tiempo
    const hash = MD5(ts+privateKey+publicKey)
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
}