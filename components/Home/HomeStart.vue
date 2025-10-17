<template>
    <div class="home-page">
        <div class="grid-container">
            <div class="slider">
                <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{
                    active: index === activeIndex,
                    'slide-next': direction === 'next' && index === activeIndex,
                    'slide-prev': direction === 'prev' && index === activeIndex
                }">
                    <div class="text-box">
                        <span class="badge">{{ slide.badge }}</span>
                        <h2>{{ slide.title }}</h2>
                        <p>{{ slide.description }}</p>
                        <button class="btn">SHOP NOW</button>
                    </div>

                    <div class="image-box">
                        <img :src="slide.image" :alt="slide.title" />
                    </div>
                </div>

                <!-- <button @click="prevSlide" class="nav prev" aria-label="Previous slide">‹</button>
        <button @click="nextSlide" class="nav next" aria-label="Next slide">›</button> -->
                <div class="dots-container">
                    <span v-for="(slide, index) in slides" :key="'dot-' + index" class="dot"
                        :class="{ active: index === activeIndex }" @click="goToSlide(index)"
                        :aria-label="`Go to slide ${index + 1}`"></span>
                </div>
            </div>
            <div class="card fruits">
                <div class="card-content">
                    <h2>20% Off</h2>
                    <div class="sale">
                        <hr class="line">
                        <span style="white-space: nowrap; font-size: small;">S A L E</span>
                    </div>
                    <p>Fruits & Vegetables</p>
                    <a href="#">Shop Collection &#10140;</a>
                </div>
                <img :src="veggies" alt="Fruits and Vegetables" />
            </div>

            <div class="card baked">
                <div class="card-content">
                    <h2>15% Off</h2>
                    <div class="sale">
                        <hr class="line">
                        <span style="white-space: nowrap; font-size: small;">S A L E</span>
                    </div>

                    <p>Baked Products</p>
                    <a href="#">Shop Collection &#10140;</a>
                </div>
                <img :src="bread" alt="Baked Products" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const juice = '/images/juice.png'
const veggies = '/images/veggies.png'
const ketchup = '/images/ketchup.png'
const bread = '/images/bread.png'

const slides = [
    {
        badge: '100% Natural',
        title: 'Fresh Smoothie & Summer Juice',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet.',
        image: juice
    },
    {
        badge: '100% Natural',
        title: 'Fruits & Vegetables',
        description: 'Shop the best organic fruits & veggies today.',
        image: juice
    },
    {
        badge: '100% Natural',
        title: 'Baked Products',
        description: 'Delicious breads and more baked with love.',
        image: ketchup
    }
]

// Slider state
const activeIndex = ref(0)
const direction = ref<'next' | 'prev'>('next')

// Slider navigation
const nextSlide = () => {
    direction.value = 'next'
    activeIndex.value = (activeIndex.value + 1) % slides.length
}

const prevSlide = () => {
    direction.value = 'prev'
    activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}
const goToSlide = (index: number) => {
    if (index === activeIndex.value) return // Do nothing if clicking current slide

    // Determine direction for animation based on the index change
    if (index > activeIndex.value) {
        direction.value = 'next'
    } else {
        direction.value = 'prev'
    }

    // Set the new active index
    activeIndex.value = index
}

// Auto-play slider
const autoPlayInterval = ref<NodeJS.Timeout | null>(null)

const startAutoPlay = () => {
    autoPlayInterval.value = setInterval(() => {
        nextSlide()
    }, 5000)
}

const stopAutoPlay = () => {
    if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value)
        autoPlayInterval.value = null
    }
}

onMounted(() => {
    startAutoPlay()
})

onUnmounted(() => {
    stopAutoPlay()
})
</script>

<style scoped lang="scss">
$color-primary: #e7f3ff;
$color-secondary: #8f8f8f;
$color-accent: #e93434;
$color-orange: orange;
$color-black: #000;
$color-white: #fff;
$color-gray-light: #f8f8f8;
$color-green-light: #eef8e6;
$color-red-light: #fdeaea;

$font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
$font-family-lucida: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', sans-serif;

$spacing-base: 1rem;
$spacing-double: 2rem;

$border-radius: 12px;
$border-radius-lg: 16px;
$transition-speed: 0.6s;

.home-page {
    .home-section {
        font-family: $font-family;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr 1fr;
        gap: $spacing-double;
        max-width: 1550px;
        height: 65 0px;
        margin: 0 2% 0 8.4%;
        font-family: $font-family;

        .slider {
            grid-row: 1 / span 2;
            grid-column: 1 / 2;
            background: $color-primary;
            border-radius: $border-radius-lg;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .dots-container {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 10px;
                z-index: 10;

                .dot {
                    display: block;
                    width: 15px;
                    height: 15px;
                    background: rgba(rgb(155, 155, 155), 0.3); // Inactive color
                    border-radius: 50%;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;

                    &:hover {
                        background: rgba(rgb(95, 95, 95), 0.5);
                    }

                    &.active {
                        background: orange; // Active color
                        transform: scale(1.1);
                    }
                }
            }

            .slide {
                position: absolute;
                inset: 0;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                background: $color-primary;
                padding: $spacing-double;
                opacity: 0;
                transform: translateX(100%);
                transition: opacity $transition-speed ease;

                &.active {
                    opacity: 1;
                }

                &.slide-next {
                    animation: slideInFromRight $transition-speed ease forwards;
                }

                &.slide-prev {
                    animation: slideInFromLeft $transition-speed ease forwards;
                }

                .text-box {
                    flex: 1;
                    padding: 60px 0px;


                    .badge {
                        color: $color-orange;
                        font-weight: bold;
                        display: block;
                        margin-bottom: $spacing-base;
                        font-size: 2.5rem;
                        font-weight: 100;
                        font-family: 'Times New Roman', Times, serif
                    }

                    h2 {
                        font-size: 3.3rem;
                        font-weight: 700;
                        margin-bottom: $spacing-base;
                        font-family: 'Nunito', 'Open Sans', sans-serif;
                    }

                    p {
                        font-size: 1.2rem;
                        line-height: 1.6;
                        color: $color-secondary;
                        margin-bottom: 1.5rem;
                    }

                    .btn {
                        padding: 0.5rem $spacing-base;
                        border: 1px solid $color-accent;
                        background: $color-primary;
                        cursor: pointer;
                        border-radius: 5px;
                        height: 60px;
                        width: 40%;
                        font-size: large;
                        transition: all 0.3s ease;

                        &:hover {
                            color: $color-primary;
                            background-color: $color-black;
                        }

                        &:active {
                            transform: scale(0.98);
                        }
                    }
                }

                .image-box {
                    flex: 1;
                    display: flex;
                    justify-content: center;

                    img {
                        max-height: 500px;
                        object-fit: contain;
                    }
                }
            }

            // Nav buttons
            .nav {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.5);
                color: $color-white;
                border: none;
                padding: 8px 18px;
                cursor: pointer;
                font-size: 24px;
                z-index: 10;
                border-radius: 50%;
                transition: all 0.3s ease;

                &:hover {
                    background: rgba(0, 0, 0, 0.8);
                    transform: translateY(-50%) scale(1.1);
                }

                &:active {
                    transform: translateY(-50%) scale(0.95);
                }

                &.prev {
                    left: 10px;
                }

                &.next {
                    right: 10px;
                }
            }
        }

        // Card sections
        .card {
            position: relative;
            border-radius: $border-radius;
            padding: $spacing-double;
            overflow: hidden;
            background: $color-gray-light;
            max-width: 600px;
            transition: transform 0.3s ease;

            &:hover {
                transform: translateY(-5px);

                img {
                    transform: scale(1.05);
                }
            }

            .card-content {
                position: relative;
                z-index: 2;
                max-width: 200px;

                h2 {
                    font-size: 2.5rem;
                    font-weight: 100;
                    font-family: 'Times New Roman', Times, serif;
                    margin-bottom: $spacing-base;
                }

                .sale {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-left: 0px;
                    padding-left: 0px;

                    .line {
                        flex: 0 0 90px;
                        border: 0;
                        height: 1px;
                        background-color: black;
                        justify-content: center;
                        margin: 0px 10px 0px 0px;
                    }
                }

                p {
                    font-size: 2rem;
                    margin-bottom: $spacing-base;
                    margin-top: 16px;
                    color: $color-black;
                    font-family: 'Nunito', 'Open Sans', sans-serif;
                    font-weight: 700;
                }

                a {
                    font-size: 1rem;
                    font-weight: 500;
                    text-decoration: none;
                    color: $color-secondary;
                    transition: color 0.3s ease;

                    &:hover {
                        color: $color-black;
                    }
                }
            }

            img {
                position: absolute;
                bottom: 0;
                right: 0;
                max-height: 250px;
                object-fit: contain;
                z-index: 1;
                transition: transform 0.3s ease;
            }

            &.fruits {
                background: $color-green-light;
            }

            &.baked {
                background: $color-red-light;
            }
        }


    }
}

// Animations
@keyframes slideInFromRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@media (max-width: 1024px) {
    .home-page .grid-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        height: auto;
        gap: $spacing-base;

        .slider {
            grid-row: 1;
            grid-column: 1;
            min-height: 500vh;

            .slide .text-box {
                h2 {
                    font-size: 2.5rem;
                }

                p {
                    font-size: 1rem;
                }

                .btn {
                    width: 50%;
                }
            }
        }

        .card {
            grid-column: 1;
        }
    }
}

@media (max-width: 768px) {
    .home-page .grid-container {
        margin: 0 4%;

        .slider {
            flex-wrap: wrap;
            min-height: 100vh;
            min-width: min-content;


            .slide {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;


                .text-box {

                    h2 {
                        font-size: 2rem;
                    }

                    .btn {
                        width: 60%;
                    }
                }

                .image-box {
                    flex: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        max-height: 50vh;
                        width: auto;
                    }
                }

            }
        }

        .card {
            .card-content {
                h2 {
                    font-size: 1.5rem;
                }

                p {
                    font-size: 1.3rem;
                }
            }

            img {
                max-height: 180px;
            }
        }
    }
}
</style>