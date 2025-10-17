<template>
    <section class="main-boss">
        <ReusableComponentsCarouselSlider title="Most Popular" view-all-text="View All Categories"
            view-all-link="/Products" :scroll-amount="400">
            <ReusableComponentsProductCard v-for="prod in Products" :key="prod.id" :product="prod"
                @toggle-fav="toggleFav(prod)" @increment="inc(prod)" @decrement="dec(prod)"
                @add-to-cart="addToCart(prod)" />
        </ReusableComponentsCarouselSlider>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '~/stores/Cart'


import banabas from '/images/products/thumb-bananas.png'
import cucumber from '/images/products/thumb-cucumber.png'
import milk from '/images/products/thumb-milk.png'
import tomatoes from '/images/products/thumb-tomatoes.png'
import ketchup from '/images/tomatoSauce.png'

const Products = ref([
    { id: 1, name: "Cucumbers", img: cucumber, rating: 4.2, price: "$10", quant: 0, categories: "Fruits and Veggies", fav: false },
    { id: 2, name: "Bananas", img: banabas, rating: 4.6, price: "$12", quant: 0, categories: "Fruits and Veggies", fav: false },
    { id: 3, name: "Milk", img: milk, rating: 4.1, price: "$8", quant: 0, categories: "Fruits and Veggies", fav: false },
    { id: 4, name: "Tomatoes", img: tomatoes, rating: 4, price: "$7", quant: 0, categories: "Fruits and Veggies", fav: false },
    { id: 5, name: "Ketchup", img: ketchup, rating: 4.6, price: "$12", quant: 0, categories: "Juices", fav: false },
    { id: 6, name: "Milk2", img: milk, rating: 4.1, price: "$8", quant: 0, categories: "Fruits and Veggies", fav: false },
    { id: 7, name: "Tomatoes2", img: tomatoes, rating: 4, price: "$7", quant: 0, categories: "Juices", fav: false },
    { id: 8, name: "Cucumbers2", img: cucumber, rating: 4.2, price: "$10", quant: 0, categories: "Juices", fav: false },
    { id: 9, name: "Ketchup2", img: ketchup, rating: 4.6, price: "$12", quant: 0, categories: "Juices", fav: false },
    { id: 10, name: "Bananas", img: banabas, rating: 4.6, price: "$12", quant: 0, categories: "Fruits and Veggies", fav: false }
])

const inc = (product) => product.quant++
const dec = (product) => { if (product.quant > 0) product.quant-- }
const toggleFav = (product) => product.fav = !product.fav

const cart = useCartStore()
const addToCart = (product) => { if (product.quant > 0) cart.addToCart(product) }
</script>

<style lang="scss" scoped>
.main-boss {
    min-height: fit-content;

    .cards-box {
        display: flex;
        flex-direction: row;
    }
}

@media (max-width: 1024px) {
    .mainboss {
        .cards-box {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
}
</style>
