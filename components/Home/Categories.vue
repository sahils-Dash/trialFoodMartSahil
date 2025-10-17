<template>
    <ReusableComponentsCarouselSlider title="Category" view-all-text="View All Categories" view-all-link="/categories"
        :scroll-amount="300">
        <div class="card" v-for="(cat, index) in categories" :key="index">
            <img :src="cat.icon" alt="icon" class="icon" />
            <p><b>{{ cat.name }}</b></p>
        </div>
    </ReusableComponentsCarouselSlider>
</template>

<script setup>
import fruits from '/images/icon-bread-herb-flour.png'
import breads from '/images/icon-vegetables-broccoli.png'

const categories = [
    { name: 'Fruits & Veges', icon: fruits },
    { name: 'Breads & Sweets', icon: breads },
    { name: 'Drinks', icon: fruits },
    { name: 'Meat', icon: breads },
    { name: 'Supplements', icon: fruits },
    { name: 'Fruits & Veges', icon: fruits },
    { name: 'Breads & Sweets', icon: breads },
    { name: 'Drinks', icon: fruits },
    { name: 'Meat', icon: breads },
    { name: 'Supplements', icon: fruits },
    { name: 'Fruits & Veges', icon: fruits },
    { name: 'Breads & Sweets', icon: breads },
    { name: 'Drinks', icon: fruits },
    { name: 'Meat', icon: breads },
    { name: 'Supplements', icon: fruits },
    { name: 'Fruits & Veges', icon: fruits },
    { name: 'Breads & Sweets', icon: breads },
    { name: 'Drinks', icon: fruits },
    { name: 'Meat', icon: breads },
    { name: 'Supplements', icon: fruits }
]
</script>

<style lang="scss" scoped>
.card {
    min-width: 230px;
    height: 200px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(109, 109, 109, 0.08);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 30px rgba(53, 53, 53, 0.15);
    }

    .icon {
        height: 40px;
        margin-bottom: 10px;
        object-fit: contain;
    }

    p {
        font-size: 1rem;
        text-align: center;
        color: #333;
    }
}

@media (max-width: 768px) {
    .card {
        min-width: 150px;
        height: 160px;

        .icon {
            height: 30px;
            margin-bottom: 6px;
        }

        p {
            font-size: 0.875rem;
        }
    }
}
</style>
