
function msj(){
    let input=prompt('¿Que te gustaría hacer?');
    const prod =['**********','¡Gracias por estar aqui!'];
    while(input !== 'ESC' && input!=='esc'){
        if(input==='VER'){
            for(let i=0;i<prod.length;i++){
                alert(`${i}: ${prod[i]}`);
                console.log(`${i}: ${prod[i]}`);
            }
        }else if(input==='ADD'){
            const newProd=prompt('¿Que producto quieres agregar?')
            prod.push(newProd);
            alert(`${newProd} se agregó al carrito`)
        }else if(input==='DEL'){
            const num=parseInt(prompt('Ingresa el número del producto para eliminarlo'));
            if(!Number.isNaN(num)){
                const deleted= prod.splice(num,1)
                alert(`${deleted[0]} se elimino de tu lista`)
            }else{
                alert('Número desconocido')
            }
        }
        input=prompt('¿Que te gustaría hacer?')
    }
    
}
alert('bye bye')
msj()
msj()
msj()
msj()
alert('OK pues BYE')

