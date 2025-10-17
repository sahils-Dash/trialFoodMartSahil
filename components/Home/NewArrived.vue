<template>
  <ReusableComponentsCarouselSlider title="Newly Arrived Brands" view-all-text="View All Categories"
    view-all-link="/categories" :scroll-amount="400">
    <div class="card" v-for="(cat, index) in categories" :key="index">
      <img :src="cat.icon" alt="icon" class="icon" />
      <div class="des12">
        <h4>{{ cat.name }}</h4>
        <p>{{ cat.descp }}</p>
      </div>
    </div>
  </ReusableComponentsCarouselSlider>
</template>

<script setup>
import new1 from '/images/newA1.jpg'
import new2 from '/images/newA2.jpg'
import new3 from '/images/newA3.jpg'
import new4 from '/images/newA4.jpg'

const categories = [
  { name: 'Amber Jar', descp: 'Honey Best Nectar you wish to get', icon: new1 },
  { name: 'Amber Jar', descp: 'Honey Best Nectar you wish to get', icon: new4 },
  { name: 'Amber Jar', descp: 'Honey Best Nectar you wish to get', icon: new3 },
  { name: 'Amber Jar', descp: 'Honey Best Nectar you wish to get', icon: new4 },
  { name: 'Amber Jar', descp: 'Honey Best Nectar you wish to get', icon: new1 },
  { name: 'Amber Jar', descp: 'Honey Best Nectar you wish to get', icon: new2 },
  { name: 'Amber Jar', descp: 'Honey Best Nectar you wish to get', icon: new3 }
]
</script>

<style lang="scss" scoped>
.card {
  min-width: 350px;
  height: 125px;
  border-radius: 12px;
  background: #fff;
  box-shadow: -1px 6px 20px rgba(0, 0, 0, 0.137);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 12px;

  .icon {
    height: 100px;
    width: auto;
    margin-right: 12px;
    border-radius: 7px;
    object-fit: cover;
  }

  .des12 {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 18px;
      margin-bottom: 2px;
      white-space: normal;
      color: #333;
    }

    p {
      font-size: 16px;
      color: #666;
      margin-top: 2px;
      white-space: normal;
      width: 90%;
    }
  }
}
</style>
