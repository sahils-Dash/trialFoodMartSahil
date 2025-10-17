<template>
    <div class="trending-products">
        <div class="head-trending">
            <h2 class="section-title">Trending Products</h2>
            <span class="filters">
                <button v-for="cat in categories" :key="cat" @click="selected = cat"
                    :class="{ active: selected === cat }" class="filter-btn">
                    {{ cat }}
                </button>
            </span>
        </div>

        <div class="cards-box">
            <ReusableComponentsProductCard v-for="prod in filteredProducts" :key="prod.id" :product="prod"
                @toggle-fav="toggleFav(prod)" @increment="inc(prod)" @decrement="dec(prod)"
                @add-to-cart="addToCart(prod)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/Cart'

const bananas = '/images/products/thumb-bananas.png'
const cucumber = '/images/products/thumb-cucumber.png'
const milk = '/images/products/thumb-milk.png'
const tomatoes = '/images/products/thumb-tomatoes.png'

// Interface for Product type
interface Product {
    id: number
    name: string
    img: string
    rating: number
    price: string
    quant: number
    categories: string
    fav: boolean
}

// Categories
const categories = ["All", "Fruits and Veggies", "Juices"]
const selected = ref("All")

// Products data
const Products = ref<Product[]>([
    {
        id: 1,
        name: "Cucumbers",
        img: cucumber,
        rating: 4.2,
        price: "$10",
        quant: 0,
        categories: "Fruits and Veggies",
        fav: false
    },
    {
        id: 2,
        name: "Bananas",
        img: bananas,
        rating: 4.6,
        price: "$12",
        quant: 0,
        categories: "Fruits and Veggies",
        fav: false
    },
    {
        id: 3,
        name: "Milk",
        img: milk,
        rating: 4.1,
        price: "$8",
        quant: 0,
        categories: "Fruits and Veggies",
        fav: false
    },
    {
        id: 4,
        name: "Tomatoes",
        img: tomatoes,
        rating: 4,
        price: "$7",
        quant: 0,
        categories: "Fruits and Veggies",
        fav: false
    },
    {
        id: 5,
        name: "Bananas2",
        img: bananas,
        rating: 4.6,
        price: "$12",
        quant: 0,
        categories: "Juices",
        fav: false
    },
    {
        id: 6,
        name: "Milk2",
        img: milk,
        rating: 4.1,
        price: "$8",
        quant: 0,
        categories: "Fruits and Veggies",
        fav: false
    },
    {
        id: 7,
        name: "Tomatoes2",
        img: tomatoes,
        rating: 4,
        price: "$7",
        quant: 0,
        categories: "Juices",
        fav: false
    },
    {
        id: 8,
        name: "Cucumbers2",
        img: cucumber,
        rating: 4.2,
        price: "$10",
        quant: 0,
        categories: "Juices",
        fav: false
    }
])

// Cart store
const cart = useCartStore()

// Increment quantity
const inc = (product: Product) => {
    product.quant++
}

// Decrement quantity
const dec = (product: Product) => {
    if (product.quant > 0) {
        product.quant--
    }
}

// Filtered products based on selected category
const filteredProducts = computed(() => {
    if (selected.value === "All") return Products.value
    return Products.value.filter((p) => p.categories === selected.value)
})

// Toggle favorite
const toggleFav = (product: Product) => {
    product.fav = !product.fav
}

// Add to cart
const addToCart = (product: Product) => {
    if (product.quant > 0) {
        cart.addToCart(product)
    }
}
</script>

<style scoped lang="scss">
$color-primary: orange;
$color-text: #333;
$color-border: transparent;
$color-white: #fff;

$font-size-title: 2.1rem;
$font-size-base: 1rem;

$spacing-base: 20px;
$spacing-large: 40px;

$transition-speed: 0.3s;

.trending-products {
    padding: $spacing-large;
    margin: 0 6%;

    .head-trending {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .section-title {
        font-size: $font-size-title;
        margin-bottom: $spacing-base;
        margin-top: 10px;
        color: $color-text;
        font-weight: 700;
    }

    .filters {
        display: flex;
        justify-content: flex-end;
        gap: $spacing-base;
        margin-bottom: $spacing-base;
        transition: all 0.3 smooth;

        .filter-btn {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            padding-bottom: 4px;
            border-bottom: 2px solid $color-border;
            color: $color-text;
            position: relative;

            &:hover {
                color: $color-primary;
            }

            &.active {
                border-bottom: 3px solid $color-primary;
            }
        }
    }

    .cards-box {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: $spacing-base;
    }
}

// Responsive Design
@media (max-width: 1400px) {
    .trending-products .cards-box {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 1024px) {
    .trending-products {
        margin: 0 4%;

        .section-title {
            font-size: 2rem;
        }

        .cards-box {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}

@media (max-width: 768px) {
    .trending-products {
        padding: $spacing-base;

        .section-title {
            font-size: 1.75rem;
            text-align: center;
        }

        .filters {
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;

            .filter-btn {
                font-size: 0.9rem;
            }
        }

        .cards-box {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
    }
}

@media (max-width: 480px) {
    .trending-products {
        .section-title {
            font-size: 1.5rem;
        }

        .cards-box {
            grid-template-columns: 1fr;
        }
    }
}
</style>