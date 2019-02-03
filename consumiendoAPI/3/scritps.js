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
}
let dataRetriever  = new DataRetriever();