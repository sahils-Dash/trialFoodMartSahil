<template>
    <section class="form-container">
        <div class="container1">
            <img :src="phonePic" alt="App phone preview" />
        </div>

        <div class="container2">
            <h1>Shop faster with <span class="highlight">FoodMart</span> App</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, odit magnam. Tempore consequuntur
                doloremque
                neque possimus ab! Rerum molestiae sed, reprehenderit, ipsa necessitatibus esse delectus inventore
                assumenda repellendus,
                vero ad? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consectetur tempora
                dolorum magni voluptates.
            </p>

            <div class="logos">
                <img :src="appStore" alt="App Store" class="store-logo" />
                <img :src="playStore" alt="Play Store" class="store-logo" />
            </div>
        </div>
    </section>

    <section class="quickTiles">
        <h2>People are also looking for</h2>

        <div class="tilesGrid">
            <span class="tiles" v-for="search in searches" :key="search.id">
                {{ search.name }}
            </span>
        </div>
    </section>
</template>

<script setup>
import phonePic from '/images/phone.png'
import appStore from '/images/app-store.jpg'
import playStore from '/images/google-play.jpg'

const searches = [
    { id: 1, name: 'Blue diamond almonds' },
    { id: 2, name: 'Blue diamond almonds' },
    { id: 3, name: 'Green Olives' },
    { id: 4, name: 'Custard apple shake' },
    { id: 5, name: 'Blue almonds cherries' },
    { id: 6, name: 'Red pinaple' },
    { id: 7, name: 'Blue diamond orange spotted green' },
    { id: 8, name: 'Red mustard sauce' },
    { id: 9, name: 'Blue diamond' },
    { id: 10, name: 'Almonds ice coffee ice cream latte' },
    { id: 11, name: 'Yellow banana' },
    { id: 12, name: 'Ripe Papaya' },
    { id: 13, name: 'Macha green tea' },
    { id: 14, name: 'Almonds ice coffee ice cream latte' },
    { id: 15, name: 'Blue almonds cherries' },
    { id: 16, name: 'Ripe Papaya' },
    { id: 17, name: 'Green Olives red olives' },
    { id: 18, name: 'Blue diamond almonds' }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/AppStore.scss';
</style>