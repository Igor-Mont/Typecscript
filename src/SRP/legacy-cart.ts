import { CartItem } from './protocols/cart-item'
import { OrderStatus } from './protocols/order-status'

class Cart {
  private readonly _items: CartItem[] = []
  private _orderStatus: OrderStatus = 'open'

  addItem (item: CartItem): void {
    this._items.push(item)
  }

  removeItem (index: number): void {
    this._items.splice(index, 1)
  }

  isEmpty (): boolean {
    return this._items.length === 0
  }

  sendMessage (msg: string): void {
    console.log('Send message:', msg)
  }

  total (): number {
    return +this._items
      .reduce((total, value) => total + value.price, 0)
      .toFixed(2)
  }

  saveOrder (): void {
    console.log('Order saved successfully!')
  }

  clear (): void {
    this._items.length = 0
    console.log('The cart was cleaned.')
  }

  checkout (): void {
    if (this.isEmpty()) {
      console.log('Cart is empty.')
      return
    }

    this._orderStatus = 'closed'
    this.sendMessage(`Your order with total of ${this.total()} has been received.`)
    this.saveOrder()
    this.clear()
  }

  get items (): Readonly<CartItem[]> {
    return this._items
  }

  get orderStatus (): Readonly<OrderStatus> {
    return this._orderStatus
  }
}

export { Cart }
