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
    ajaxCall(url){
        fetch(url)
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(err=>`Problems retriving information ${err}`)
    }
    *getInfo(userId){
        const user = yield this.ajaxCall(`${DataRetriever.BASE_URL}/users/${userId}`)
        console.log(user)
    }
    getUser(){
        const userId = DataRetriever.INPUT_ELM.value;
        // console.log(userId)
        var dataGenerador = this.getInfo(userId)
        dataGenerador.next()

    }
    init(){
        DataRetriever.TRIGGER_ELM.addEventListener('click',e=>{
            e.preventDefault()
            // console.log('click')
            this.getUser()
        })
    }
}
let dataRetriever  = new DataRetriever();
dataRetriever.init()