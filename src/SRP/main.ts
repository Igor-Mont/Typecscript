import { Cart } from './services/SRP-cart'
import { Order } from './entities/order'
import { Product } from './entities/product'
import { Messaging } from './services/messaging'
import { Persistency } from './services/persistency'

const cart = new Cart()
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(cart, messaging, persistency)

cart.addItem(new Product('Shirt', 50))
cart.addItem(new Product('Hat', 60))

console.log(cart.items)
console.log(cart.total())

console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
