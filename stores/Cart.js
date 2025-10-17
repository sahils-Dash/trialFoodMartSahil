import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    showCart: false, // Add this to control the drawer
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quant, 0),

    totalPrice: (state) =>
      state.items.reduce(
        (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quant,
        0,
      ),
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quant += product.quant
      } else {
        this.items.push({ ...product })
      }
      product.quant = 0
    },

    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.id !== productId)
    },

    clearCart() {
      this.items = []
    },
    toggleCart() {
      this.showCart = !this.showCart
    },
  },
})