import { NoDiscount } from './entities/discount'
import { Cart } from './entities/OCP-cart'
import { Order } from './entities/order'
import { Product } from './entities/product'
import { Messaging } from './services/messaging'
import { Persistency } from './services/persistency'

// const fiftyPercentDiscount = new FiftyPercentDiscount()
const noDiscount = new NoDiscount()
const cart = new Cart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(cart, messaging, persistency)

cart.addItem(new Product('Shirt', 50))
cart.addItem(new Product('Hat', 60))

console.log(cart.items)
console.log(cart.total())
console.log(cart.totalWithDiscount())

console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
