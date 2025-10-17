<template>
    <div class="product-card">
        <button class="fav-btn" @click="$emit('toggleFav')" :class="{ active: product.fav }"
            aria-label="Toggle favorite">
            <i class="fa-regular fa-heart"></i>
        </button>

        <div class="prod-image">
            <img :src="product.img" :alt="product.name" />
        </div>

        <h3 class="prod-name">{{ product.name }}</h3>
        <p class="prod-rating">⭐{{ product.rating }}</p>
        <p class="prod-price">{{ product.price }}</p>

        <div class="quantity-section">
            <div class="quantity-controls">
                <div class="quantity-buttons">
                    <button @click="$emit('decrement')" class="qty-btn qty-minus" :disabled="product.quant === 0"
                        aria-label="Decrease quantity">
                        -
                    </button>
                    <span class="quantity-value">{{ product.quant }}</span>
                    <button @click="$emit('increment')" class="qty-btn qty-plus" aria-label="Increase quantity">
                        +
                    </button>
                    <button :disabled="product.quant === 0" @click="$emit('addToCart')" class="add-cart-btn">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Product interface
interface Product {
    id: number
    name: string
    img: string
    rating: number
    price: string
    quant: number
    categories?: string
    fav: boolean
}

// Props
interface Props {
    product: Product
}

defineProps<Props>()

// Emits
defineEmits<{
    toggleFav: []
    increment: []
    decrement: []
    addToCart: []
}>()
</script>

<style scoped lang="scss">
// Variables
$color-white: #fff;
$color-black: #000;
$color-text: #555;
$color-text-dark: #1a1a1a;
$color-border: #eee;
$color-border-btn: #b8b8b8;
$color-bg-light: #faf7f7;
$color-bg-cart: #f5faff;
$color-red: rgb(255, 0, 0);

$spacing-xs: 4px;
$spacing-sm: 6px;
$spacing-base: 8px;
$spacing-md: 12px;
$spacing-lg: 16px;

$border-radius: 8px;
$border-radius-lg: 16px;
$border-radius-round: 50%;

$font-size-sm: 0.9rem;
$font-size-base: 1rem;
$font-size-lg: 25px;
$font-size-xl: 25px;

$transition-speed: 0.3s;
$transition-speed-fast: 0.2s;

.product-card {
    background: $color-white;
    border-radius: $border-radius-lg;
    border: 1px solid $color-border;
    padding: $spacing-lg;
    text-align: center;
    transition: box-shadow $transition-speed ease, transform $transition-speed ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    max-height: 330px;

    &:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

        .prod-image img {
            transform: scale(1.05);
        }
    }

    .fav-btn {
        position: absolute;
        top: $spacing-lg;
        right: $spacing-lg;
        border-radius: $border-radius-round;
        width: 40px;
        height: 40px;
        padding: 0;
        background-color: $color-white;
        border: none;
        cursor: pointer;
        font-size: 1.1rem;
        line-height: 1;
        z-index: 1;
        transition: all $transition-speed-fast ease;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
            transform: scale(1.1);
            background-color: $color-red;
            color: $color-white;
        }

        &:active {
            transform: scale(0.95);
        }

        &.active {
            background-color: $color-red;
            color: $color-white;

            i {
                font-weight: 900;
            }
        }

        &:focus {
            outline: 2px solid $color-red;
            outline-offset: 2px;
        }
    }

    .prod-image {
        width: 100%;
        height: 200px;
        border-radius: $border-radius-lg;
        background-color: $color-bg-light;
        margin: 0 auto $spacing-md;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
            width: 150%;
            height: 150%;
            object-fit: contain;
            transition: transform $transition-speed ease;
        }
    }

    .prod-name {
        font-size: $font-size-base;
        font-weight: 600;
        margin: 1% 0;
        text-align: left;
        color: $color-black;
        line-height: 1.4;
    }

    .prod-rating {
        margin: 1% 0;
        color: $color-text;
        font-size: $font-size-sm;
        text-align: left;
        font-weight: 400;
    }

    .prod-price {
        font-size: $font-size-xl;
        font-weight: 600;
        color: $color-black;
        margin: $spacing-xs 0;
        text-align: left;
    }

    .quantity-section {
        display: flex;
        flex-direction: column;
        gap: $spacing-base;
        margin-top: auto;
        padding-top: $spacing-base;

        .quantity-controls {
            display: flex;
            flex-direction: column;
            gap: $spacing-sm;

            .quantity-buttons {
                display: flex;
                align-items: center;
                gap: $spacing-base;

                .qty-btn {
                    background: $color-white;
                    padding: $spacing-xs 10px;
                    border-radius: $spacing-sm;
                    cursor: pointer;
                    border: 1px solid $color-border-btn;
                    font-size: large;
                    font-weight: 500;
                    min-width: 32px;
                    height: 32px;
                    transition: all $transition-speed-fast ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:hover:not(:disabled) {
                        background: $color-border;
                        border-color: $color-text;
                    }

                    &:active:not(:disabled) {
                        transform: scale(0.95);
                    }

                    &:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    &:focus {
                        outline: 2px solid $color-text-dark;
                        outline-offset: 1px;
                    }
                }

                .quantity-value {
                    min-width: 30px;
                    text-align: center;
                    font-weight: 600;
                    font-size: $font-size-base;
                }
            }
        }

        .add-cart-btn {
            background: $color-bg-cart;
            color: $color-text-dark;
            border: 1px solid transparent;
            border-radius: $border-radius;
            padding: 10px 2px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            transition: all $transition-speed-fast ease;
            width: 100%;

            &:hover:not(:disabled) {
                background: $color-text-dark;
                color: $color-white;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }

            &:active:not(:disabled) {
                transform: translateY(0);
            }

            &:disabled {
                background: $color-white;
                color: $color-text;
                cursor: not-allowed;
                opacity: 0.6;
            }

            &:focus:not(:disabled) {
                outline: 2px solid $color-text-dark;
                outline-offset: 2px;
            }
        }
    }
}

// Responsive Design
@media (max-width: 768px) {
    .product-card {
        .prod-image {
            height: 180px;
        }

        .prod-name {
            font-size: 0.95rem;
        }

        .prod-price {
            font-size: $font-size-lg;
        }
    }
}

@media (max-width: 480px) {
    .product-card {
        padding: $spacing-md;

        .fav-btn {
            width: 36px;
            height: 36px;
            font-size: 1rem;
        }

        .prod-image {
            height: 160px;
            margin-bottom: $spacing-base;
        }

        .prod-name {
            font-size: $font-size-sm;
        }

        .prod-price {
            font-size: 22px;
        }

        .quantity-section {
            .add-cart-btn {
                font-size: $font-size-sm;
                padding: $spacing-base $spacing-md;
            }
        }
    }
}
</style>