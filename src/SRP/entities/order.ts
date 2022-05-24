import { OrderStatus } from '../protocols/order-status'
import { Messaging } from '../services/messaging'
import { Persistency } from '../services/persistency'
import { Cart } from '../services/SRP-cart'

class Order {
  private readonly _orderStatus: OrderStatus = 'open'

  constructor (
    private readonly cart: Cart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus (): Readonly<OrderStatus> {
    return this._orderStatus
  }

  checkout (): void {
    if (this.cart.isEmpty()) {
      console.log('Cart is empty.')
      return
    }

    this.messaging.sendMessage(`Your order with total of ${this.cart.total()} has been received.`)
    this.persistency.saveOrder()
    this.cart.clear()
  }
}

export { Order }
