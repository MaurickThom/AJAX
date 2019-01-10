const imprimirTabla = container =>{
    container.addEventListener('click',e=>{
        let elemento = document.getElementById('tbody')
        elemento.innerHTML=``
        for (let index = 0; index < 3; index++) {
            fetch('https://randomuser.me/api/').
            then(data=>data.json()).
            then(data=>{
                    let user = data.results[0]
                    
                    elemento.innerHTML+=`
                        <tr>
                            <td>${user.name.first}</td>
                            <td>${user.location.city}</td>
                            <td>${user.login.username}</td>
                            <td>${user.email}</td>
                            <td>${user.phone}</td>
                        </tr>
                    `
                    
            })
            
        }
    })
}

imprimirTabla(document.getElementById('btn'))