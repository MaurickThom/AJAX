class DataRetriever{ // recolector de datos
    constructor(){
        console.log('Instanciado correctamente')
    }
    static get TRIGGER_ELM(){
        return document.querySelector('.user-button')
    }
    static get INPUT_ELM(){
        return document.querySelector('.user-input')
    }
    static get BASE_URL(){
        return `https://jsonplaceholder.typicode.com`
    }
    init(){
        DataRetriever.TRIGGER_ELM.addEventListener('click',e=>{
            e.preventDefault()
            console.log('click')
        })
    }
}
let dataRetriever  = new DataRetriever();
dataRetriever.init()