<template>
    <div class="promo-card" :style="{ backgroundColor: bgColor }">
        <!-- Left Content -->
        <div class="text-box">
            <h4 class="badge">{{ badge }}</h4>
            <h2 class="title">{{ title }}</h2>
            <p class="description">{{ description }}</p>
            <button class="btn" @click="handleClick">{{ buttonText }}</button>
        </div>

        <!-- Right Image -->
        <div class="image-box">
            <img :src="image" :alt="title" />
        </div>
    </div>
</template>

<script setup lang="ts">
// Props interface
interface Props {
    badge?: string
    title?: string
    description?: string
    image?: string
    bgColor?: string
    buttonText?: string
    link?: string
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
    badge: '',
    title: '',
    description: '',
    image: '',
    bgColor: '#f9f9f9',
    buttonText: 'SHOP NOW',
    link: '#'
})

// Emits
const emit = defineEmits<{
    click: []
}>()

// Handle button click
const handleClick = () => {
    emit('click')
    if (props.link && props.link !== '#') {
        navigateTo(props.link)
    }
}
</script>

<style scoped lang="scss">
$color-badge: #f5a623;
$color-text: #555;
$color-btn-bg: #222;
$color-btn-bg-hover: #000;
$color-white: #fff;

$font-size-badge: 2rem;
$font-size-title: 1.8rem;
$font-size-desc: 1rem;
$font-size-btn: 0.9rem;

$spacing-xs: 0.5rem;
$spacing-sm: 0.6rem;
$spacing-base: 1rem;
$spacing-lg: 1.2rem;
$spacing-xl: 2rem;

$border-radius: 6px;
$border-radius-lg: 12px;

$transition-speed: 0.3s;

.promo-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: $border-radius-lg;
    padding: $spacing-base $spacing-xl;
    gap: $spacing-base;
    min-width: 710px;
    flex: none;
    transition: transform $transition-speed ease, box-shadow $transition-speed ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    &:hover {
        box-shadow: 0 8px 20px rgba(194, 194, 194, 0.12);

        .image-box img {
            transform: scale(1.05);
        }

        .btn {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
    }

    .text-box {
        flex: 1;
        z-index: 1;

        .badge {
            font-size: $font-size-badge;
            font-family: 'Times New Roman', Times, serif;
            font-weight: bold;
            color: $color-badge;
            margin-bottom: $spacing-xs;
            margin-top: 0;
        }

        .title {
            font-size: $font-size-title;
            font-weight: 700;
            margin-bottom: $spacing-xs;
            margin-top: 0;
            line-height: 1.3;
            color: $color-btn-bg;
            font-family: 'Nunito', 'Open Sans', sans-serif;
        }

        .description {
            font-size: $font-size-desc;
            color: $color-text;
            margin-bottom: $spacing-base;
            line-height: 1.5;
        }

        .btn {
            padding: $spacing-sm $spacing-lg;
            border: none;
            background: $color-btn-bg;
            color: $color-white;
            font-size: $font-size-btn;
            font-weight: 600;
            border-radius: $border-radius;
            cursor: pointer;
            transition: all $transition-speed ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;

            &:hover {
                background: $color-btn-bg-hover;
            }

            &:active {
                transform: translateY(0);
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
            }

            &:focus {
                outline: 2px solid $color-btn-bg;
                outline-offset: 2px;
            }
        }
    }

    .image-box {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        img {
            max-height: 250px;
            width: auto;
            object-fit: contain;
            transition: transform $transition-speed ease;
        }
    }
}

@media (max-width: 768px) {
    .promo-card {
        flex-direction: column;
        padding: $spacing-base;
        width: 100%;
        min-width: 300px;
        gap: 1rem;

        .text-box {
            text-align: center;

            .btn {
                width: 100%;
            }
        }

        .image-box {
            justify-content: center;

            img {
                max-height: 150px;
            }
        }
    }
}

@media (max-width: 768px) {
    .promo-card {
        flex-direction: column;
        padding: $spacing-base;
        width: 50%;
        max-width: 100%;
        gap: 1rem;

        .text-box {
            text-align: center;

            .btn {
                width: 100%;
            }
        }

        .image-box {
            justify-content: center;

            img {
                max-height: 150px;
            }
        }
    }
}


@media (max-width: 480px) {
    .promo-card {
        padding: 0.8rem;
        gap: 0.8rem;

        .text-box {
            .badge {
                font-size: 0.9rem;
            }

            .title {
                font-size: 1.3rem;
            }

            .description {
                font-size: 0.85rem;
                margin-bottom: 0.8rem;
            }

            .btn {
                font-size: 0.85rem;
                padding: 0.6rem $spacing-base;
            }
        }

        .image-box img {
            max-height: 120px;
        }
    }
}
</style>