import { CartItem } from '../protocols/cart-item'

class Product implements CartItem {
  constructor (public name: string, public price: number) {}
}

export { Product }
