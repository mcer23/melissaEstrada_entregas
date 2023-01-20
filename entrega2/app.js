//ENTREGA 1
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
alert('bye bye')

//ENTREGA 2
class products{
    constructor(product, sabor, size, price){
     this.product = product;
     this.sabor = sabor;
     this.size = size;
     this.price = price;
     this.stock = true;
 }
 showMsg(){
    console.log(`${this.product} sabor ${sabor} tamaño ${size} cuesta ${this.price} y hay disponible ${this.stock} ${this.product}`);
}
}

let prod4 = new products ('Pastel', 'Chocolate', 'mediano', 200, 10);
prod4.show(products);
let prod5 = new products('Pay', 'Plátano', 'mini', 50, 6);
prod5.show(products);
let prod6 = new products ('Nieve', 'Suspiro de fresa','medio litro' , 125, 5);
prod6.show(products);


let productsArrays = ['Pastel', 'Pay', 'Nieve']; 

productsArrays.push('Iced Coffee')
console.log(productsArrays.length)
console.log(productsArrays)
productsArrays.unshift('Capuchino')
console.log(productsArrays)
