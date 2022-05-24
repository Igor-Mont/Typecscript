import { CartItem } from '../protocols/cart-item'

class Cart {
  private readonly _items: CartItem[] = []

  addItem (item: CartItem): void {
    this._items.push(item)
  }

  removeItem (index: number): void {
    this._items.splice(index, 1)
  }

  isEmpty (): boolean {
    return this._items.length === 0
  }

  total (): number {
    return +this._items
      .reduce((total, value) => total + value.price, 0)
      .toFixed(2)
  }

  clear (): void {
    this._items.length = 0
    console.log('The cart was cleaned.')
  }

  get items (): Readonly<CartItem[]> {
    return this._items
  }
}

export { Cart }
