var products = [
	{name:"soap", price:3},
	{name:"jamon", price:4},
	{name:"rice", price:5},
	{name:"bread", price:12},
	{name:"shampoo", price:8}
];

var carrito = [];
function añadirCarrito (product) {
	carrito.push(product);
}

function showProductos () {
	carrito.forEach (function (product){
		console.log(product.name + ": " + product.price);
	})
}

añadirCarrito(products[0]);
añadirCarrito(products[3]);
añadirCarrito(products[1]);
añadirCarrito(products[0]);
añadirCarrito(products[0]);
añadirCarrito(products[3]);
añadirCarrito(products[1]);
añadirCarrito(products[0]);
añadirCarrito(products[0]);
añadirCarrito(products[3]);
añadirCarrito(products[1]);
añadirCarrito(products[0]);

//hay que calcular la suma de todos los price del array carrito:
//primero cogemos los precios de cada uno y los sumamos:
var precioCarrito = [];
carrito.forEach (function (product){
	precioCarrito.push(product["price"]);
});

var totalPagar=[];
precioCarrito.reduce ( function (prec1, prec2) {
	 totalPagar.push(prec1 + prec2);
});

function descuento () {
	console.log(carrito.length);
	if (carrito.length >= 10) {
		// totalPagar - 20;
		console.log("Descuento de 20€");
	}
	else if (totalPagar <= 0) {
		console.log ("Te ha salido GRATIS");
	}
}

descuento();