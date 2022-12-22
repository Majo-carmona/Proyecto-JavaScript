//declaracion de variables
const moneda = "COP";
const compraMinima = 50.000;

let array_frutas = []
let array_cantidad = []

let pos = 1
let total = 0

//funciones
function solicitar_datos(){
    do {
        nombreIngresado   = prompt("Ingresar nombre");
        apellidoIngresado = prompt("Ingresar apellido");
        if((nombreIngresado !="") && (apellidoIngresado !="")){
            alert ("Bienvenidos a Fruver Casa Blanca")
        }else{
            alert("Error: Debe ingresar nombre y apellido");
        }
        
    } while (nombreIngresado===""||apellidoIngresado==="");
}

function preguntar_fruta(){
    let fruta = prompt ("ingresa la fruta deseada y te dire el precio por libra");
    switch (fruta) {
        case "pera":
            alert("El precio de la Pera es 2.500 libra");
            break;
        case "fresa":
            alert("el precio de la fresa es 2.500 libra");
            break;
        case "manzana roja":
            alert("el precio de la manzana roja es 2.500 libra");
            break;
        case "banano":
            alert("el precio del Banano es 1.800 libra");
            break;
        case "tomate":
            alert("el precio del Banano es 1.800 libra");
            break;
        case "zanahoria":
            alert("el precio de la zanahoria es 3.000 libra");
            break;
        default:
            alert(" Esta fruta/verdura no la tenemos disponible en el momento");
            break; 
    }
    let cantidad = prompt ("ingresa la cantidad de "+ fruta +" deseada");

    array_frutas[pos] = fruta
    array_cantidad[pos] = cantidad
    pos = pos + 1
}

function comprar(){
    preguntar_fruta()
    var pregunta   = prompt("¿Desea continuar comprando?");
    if(pregunta == "si"){
        comprar()
    }
}

function total_compra(){
    for(let i=0;i<=array_frutas.length;i++){
        switch (array_frutas[i]) {
            case "pera":
                total = total + ( array_cantidad[i] * 2500)
                break;
            case "fresa":
                total = total + ( array_cantidad[i] * 2500)
                break;
            case "manzana roja":
                total = total + ( array_cantidad[i] * 2500)
                break;
            case "banano":
                total = total + ( array_cantidad[i] * 1800)
                break;
            case "tomate":
                total = total + ( array_cantidad[i] * 1800)
                break;
            case "zanahoria":
                total = total + ( array_cantidad[i] * 3000)
                break;
            default:
                break; 
        }
    }
    alert('El total de productos son: '+array_frutas.length)
    alert('El total de su compra es: ' + total)
    if(total < compraMinima){
        alert('La compra minima es: '+ compraMinima)
        comprar()
    }
}

const total_compra_2 = () =>{
    for(let i=0;i<=array_frutas.length;i++){

        switch (array_frutas[i]) {
            case "pera":
                total = total + ( array_cantidad[i] * 2500)
                break;
            case "fresa":
                total = total + ( array_cantidad[i] * 2500)
                break;
            case "manzana roja":
                total = total + ( array_cantidad[i] * 2500)
                break;
            case "banano":
                total = total + ( array_cantidad[i] * 1800)
                break;
            case "tomate":
                total = total + ( array_cantidad[i] * 1800)
                break;
            case "zanahoria":
                total = total + ( array_cantidad[i] * 3000)
                break;
            default:
                break; 
        }
    }
    alert('El total de productos son: '+array_frutas.length)
    alert('El total de su compra es: ' + total)
}
//end funciones

//llamar funciones
solicitar_datos()
comprar()
total_compra()
//end llamar funciones

//envio
let conEnvio = true;
if(conEnvio){
    let direccion=prompt("Ingrese la direccion de entrega del paquete");
    alert("Mañana recibirás tu pedido en "+direccion);
}
