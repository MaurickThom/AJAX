(()=>{
    const getUsers = ()=>{
        return new Promise((resolve, reject) => {
            
            setTimeout(()=>{
                resolve('Users are ready')
            },800)
        });
    }
    const getProjects = ()=>{
        return new Promise((resolve, reject) => {
            
            setTimeout(()=>{
                resolve('Projects are ready');
            },400)
        });
    }
    const getIssues = ()=>{
        return new Promise((resolve, reject) => {
            
            setTimeout(()=>{
                reject(`Issues aren't ready`);
            },700)
        });
    }
    getUsers().
    then(response=>{
        console.log('resolve : '+response);
        return getProjects()
    })
    .then(response=>{
        console.log('resolve : '+response)
        return getIssues()
    })
    .then(response=>{
        console.log('resolve : '+response)
    })
    .catch(err=>console.log('Error : '+err))
})();
T