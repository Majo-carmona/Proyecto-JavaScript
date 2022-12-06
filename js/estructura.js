
const moneda = "COP";
const compraMinima = 50.000;


do {
    nombreIngresado   = prompt("Ingresar nombre");
    apellidoIngresado = prompt("Ingresar apellido");
    if((nombreIngresado !="") && (apellidoIngresado !="")){
        alert ("Bienvenido a Casa Blanca")
    }else{
        alert("Error: Debe ingresar nombre y apellido");
    }
    
} while (nombreIngresado===""||apellidoIngresado==="");

let fruta = prompt ("ingresa la fruta deseada y te dire el precio por libra");
switch (fruta) {
    case "pera":
        console.log("El precio de la Pera es 2.500 libra");
        break;
    case "mandarina":
        console.log("el precio de la mandarina es 4.000 libra");
        break;
    case "manzana roja":
        console.log("el precio de la manzana roja es 2.500 libra");
        break;
    case "banano":
        console.log("el precio del Banano es 1.800 libra");
        break;
    default:
        console.log(" Esta fruta no la tenemos disponible en el momento");
        break; 
}



let conEnvio = true;
if(conEnvio){
    let direccion=prompt("Ingrese la direccion de entrega del paquete");
    console.log("Mañana recibirás tu pedido en "+direccion);
}