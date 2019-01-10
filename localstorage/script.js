const apiAlmacenamiento = ()=>{
    if (typeof Storage !== undefined ){
        alert('Tu navegador si soporta el api de Storage')
    }else{
        alert('Tu navegador no soporta')
    }
}
apiAlmacenamiento()