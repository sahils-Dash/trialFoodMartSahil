<template>
    <div class="cart-container">
        <div class="cart-backdrop" @click="$emit('close')"></div>
        <div class="cart-drawer">
            <button class="close-btn" @click="$emit('close')">
                <i class="fas fa-times"></i>
            </button>

            <div class="cartHead">
                <h2 class="title">Your Cart</h2>
                <h2 class="quantity">{{ totalQuantity }}</h2>
            </div>

            <div v-if="cart.items.length === 0" class="empty">
                <p>Your cart is empty <i class="far fa-frown"></i></p>
            </div>

            <ul v-else>
                <li v-for="item in cart.items" :key="item.id">
                    <div class="itembox">
                        <div class="item-info">
                            <strong>{{ item.name || item.title }}</strong>
                            <span>
                                Qty: {{ item.quant }} × ${{ parseFloat(item.price.replace('$', '')).toFixed(2) }}
                            </span>
                        </div>
                        <div>
                            <span class="price">
                                ${{ (item.quant * parseFloat(item.price.replace('$', ''))).toFixed(2) }}
                            </span>
                        </div>
                    </div>
                    <button class="remove-btn" @click="cart.removeFromCart(item.id)">
                        Remove
                    </button>
                </li>
            </ul>

            <div class="cart-total">
                <strong>Total (USD)</strong>
                <strong>${{ cart.totalPrice.toFixed(2) }}</strong>
            </div>

            <button class="checkout">Continue to checkout</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/Cart'

const cart = useCartStore()
const totalQuantity = computed(() =>
    cart.items.reduce((sum, item) => sum + item.quant, 0)
)
</script>

<style lang="scss" scoped>
.cart-container {
    position: fixed;
    inset: 0;
    z-index: 1000;
    pointer-events: none;
}

.cart-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.cart-drawer {
    position: absolute;
    right: 0;
    top: 0;
    width: 320px;
    height: 100%;
    background: #fff;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
    padding: 20px;
    overflow-y: auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    pointer-events: auto;

    h2 {
        margin: 0 0 20px 0;
        font-size: 24px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
    }
}

.close-btn {
    padding: 8px;
    margin: 6px auto 15px auto;
    cursor: pointer;
    background: transparent;
    color: #000;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    &:hover {
        background: #b8b8b8;
    }
}

.cartHead {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
        color: orange;
    }

    .quantity {
        background-color: rgb(255, 190, 70);
        color: antiquewhite;
        border-radius: 50%;
        min-width: 45px;
        text-align: center;
        padding: 2px 0;
    }
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}

.itembox {
    display: flex;
    justify-content: space-between;
}

.item-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;

    strong {
        font-size: 16px;
    }

    span {
        font-size: 14px;
        color: #666;
    }
}

.price {
    color: #666;
}

.remove-btn {
    padding: 5px 10px;
    cursor: pointer;
    background: #ff5722;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 12px;

    &:hover {
        background: #ff6233;
    }
}

.cart-total {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid #c9c9c9;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
}

.checkout {
    text-align: center;
    background-color: rgb(255, 190, 70);
    height: 50px;
    width: 100%;
    border-radius: 10px;
    font-size: 18px;
    border: none;
    color: #fff2f2;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #d9e748;
    }
}

.empty {
    text-align: center;
    color: #777;
    font-style: italic;
}
</style>