import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";
/*Estudiante de academlo franklim  de jesus muñoz valverde */

/* UI Elements */
/* Ocultar loader */
loader()

/* Mostar Menu */
showMenu()

/* Mostrar carrito */
showCart()

/* End UI Elements */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Carrito */
cart(db, printProducts)


