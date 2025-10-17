<template>
    <div class="category-wrapper">
        <div class="header">
            <h2 :style="{ fontSize: titleSize }">{{ title }}</h2>
            <div class="right-section">
                <a :href="viewAllLink" class="view-all-link">{{ viewAllText }} &#10140;</a>
                <div class="nav-buttons">
                    <button @click="scrollLeft" :disabled="isAtStart" aria-label="Scroll left" class="nav-btn nav-left">
                        ‹
                    </button>
                    <button @click="scrollRight" :disabled="isAtEnd" aria-label="Scroll right"
                        class="nav-btn nav-right">
                        ›
                    </button>
                </div>
            </div>
        </div>
        <div class="slider-container" ref="slider" @scroll="updateScrollState">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string
    titleSize?: string
    viewAllText?: string
    viewAllLink?: string
    scrollAmount?: number
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
    title: 'Title',
    titleSize: 'xx-large',
    viewAllText: 'View All',
    viewAllLink: '#',
    scrollAmount: 300
})

// Refs
const slider = ref<HTMLElement | null>(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)

// Scroll functions
const scrollLeft = () => {
    if (slider.value) {
        slider.value.scrollBy({ left: -props.scrollAmount, behavior: "smooth" })
    }
}

const scrollRight = () => {
    if (slider.value) {
        slider.value.scrollBy({ left: props.scrollAmount, behavior: "smooth" })
    }
}

// Update scroll state to disable buttons at edges
const updateScrollState = () => {
    if (slider.value) {
        const { scrollLeft, scrollWidth, clientWidth } = slider.value
        isAtStart.value = scrollLeft === 0
        isAtEnd.value = scrollLeft + clientWidth >= scrollWidth - 1
    }
}

// Initialize scroll state on mount
onMounted(() => {
    updateScrollState()

    // Add resize observer to update state when content changes
    if (slider.value) {
        const resizeObserver = new ResizeObserver(updateScrollState)
        resizeObserver.observe(slider.value)

        onUnmounted(() => {
            resizeObserver.disconnect()
        })
    }
})
</script>

<style scoped lang="scss">
// Variables
$color-text: #666;
$color-text-dark: #000;
$color-bg-nav: #f5f5f5;
$color-bg-nav-hover: #ffb52c;
$color-disabled: rgba(0, 0, 0, 0.4);

$spacing-base: 1rem;
$spacing-small: 0.5rem;
$spacing-large: 2rem;
$spacing-margin: 20px;

$card-width: 220px;
$nav-btn-size: 40px;

$transition-speed: 0.2s;
$border-radius: 10%;

.category-wrapper {
    position: relative;
    margin: $spacing-margin 7%;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 1.6% $spacing-base 1.6%;

        h2 {
            margin: 0;
            font-weight: 700;
            color: $color-text-dark;
        }

        .right-section {
            display: flex;
            align-items: center;
            gap: $spacing-base;

            .view-all-link {
                color: $color-text;
                font-size: 17px;
                text-decoration: none;
                transition: all $transition-speed ease;
                white-space: nowrap;

                &:hover {
                    color: $color-text-dark;
                }

                &:focus {
                    // outline: 2px solid $color-text-dark;
                    outline-offset: 2px;
                    border-radius: 4px;
                }
            }

            .nav-buttons {
                display: flex;
                gap: $spacing-small;

                .nav-btn {
                    border: none;
                    background: $color-bg-nav;
                    border-radius: $border-radius;
                    width: $nav-btn-size;
                    height: $nav-btn-size;
                    font-size: 30px;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all $transition-speed ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    line-height: 1;
                    color: $color-text;

                    &:hover:not(:disabled) {
                        background: $color-bg-nav-hover;
                        color: $color-text-dark;
                    }

                    &:active:not(:disabled) {
                        transform: scale(0.95);
                    }

                    &:disabled {
                        opacity: 0.4;
                        cursor: not-allowed;
                    }
                }
            }
        }
    }

    .slider-container {
        display: flex;
        gap: $spacing-large;
        overflow-x: auto;
        overflow-y: visible;
        scroll-behavior: smooth;
        scrollbar-width: none;
        align-items: flex-start;
        padding: $spacing-margin;

        // Hide scrollbar for webkit browsers
        &::-webkit-scrollbar {
            display: none;
        }

        // Prevent cards from shrinking and set fixed width
        >* {
            flex-shrink: 0;
            width: $card-width;
        }
    }
}

// Responsive Design
@media (max-width: 1024px) {
    .category-wrapper {
        margin: $spacing-margin 5%;

        .slider-container {
            gap: 1.5rem;
            padding: 15px;

            >* {
                width: 200px;
            }
        }
    }
}

@media (max-width: 768px) {
    .category-wrapper {
        margin: $spacing-margin 4%;

        .header {
            flex-direction: column;
            align-items: flex-start;
            gap: $spacing-base;
            margin: 0 0 $spacing-base 0;

            h2 {
                font-size: 1.8rem !important;
            }

            .right-section {
                width: 100%;
                justify-content: space-between;

                .view-all-link {
                    font-size: 14px;
                }
            }
        }

        .slider-container {
            gap: $spacing-base;
            padding: 10px;

            >* {
                width: 180px;
            }
        }
    }
}

@media (max-width: 480px) {
    .category-wrapper {
        margin: 15px 2%;

        .header {
            h2 {
                font-size: 1.5rem !important;
            }

            .right-section {
                .view-all-link {
                    font-size: 13px;
                }

                .nav-buttons .nav-btn {
                    width: 28px;
                    height: 28px;
                    font-size: 24px;
                }
            }
        }

        .slider-container {
            padding: 10px 5px;

            >* {
                width: 160px;
            }
        }
    }
}
</style>