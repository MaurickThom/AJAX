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
    static get USER_CONTAINER(){
        return document.querySelector('.user-name')
    }
    static get USER_POSTS(){
        return document.querySelector('.user-post')
    }
    ajaxCall(url){
        fetch(url)
        .then(response=>response.json())
        .then(data=>this.dataGenerador.next(data))
        .catch(err=>`Problems retriving information`)
    }
    renderTemplate(user,posts){
        const {name,username} = user
        console.log(name," : ",username)
        DataRetriever.USER_CONTAINER.innerHTML=`
            <strong>${name}</strong> alias <strong>${username}</strong>
        `
        DataRetriever.USER_POSTS.innerHTML=`
            ${posts.map(post=>
                `<li>${post.title}</li>`
            ).join(' ')}
        `
    }
    *getInfo(userId){
        const user = yield this.ajaxCall(`${DataRetriever.BASE_URL}/users/${userId}`)
        const post = yield this.ajaxCall(`${DataRetriever.BASE_URL}/posts?userId=${userId}`)
        this.renderTemplate(user,post)
    }
    getUser(){
        const userId = DataRetriever.INPUT_ELM.value;
        // console.log(userId)
        this.dataGenerador = this.getInfo(userId)
        this.dataGenerador.next()

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