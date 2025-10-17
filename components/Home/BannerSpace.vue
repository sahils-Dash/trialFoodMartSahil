<template>
    <div class="promo-wrapper">
        <ReusableComponentsPromoCard badge="Upto 25% Off" title="Luxa Dark Chocolate"
            description="Very tasty & creamy vanilla flavour creamy muffins." :image="chocolate" bg-color="#faece9"
            button-text="SHOP NOW" />
        <ReusableComponentsPromoCard badge="Upto 25% Off" title="Creamy Muffins"
            description="Very tasty & creamy vanilla flavour creamy muffins." :image="muffins" bg-color="#eaf6fc"
            button-text="SHOP NOW" />
    </div>
</template>

<script setup lang="ts">
const chocolate = '/images/sweets.png'
const muffins = '/images/Muffins.png'
</script>

<style scoped lang="scss">
$spacing-base: 10px;
$spacing-gap: 1.8rem;
$margin-horizontal: 6%;

.promo-wrapper {
    display: flex;
    gap: $spacing-gap;
    justify-content: center;
    flex-wrap: wrap;
    margin: $spacing-base $margin-horizontal;
    padding: $spacing-base 0;

    @media (max-width: 1024px) {
        gap: 1.5rem;
        margin: $spacing-base 5%;
    }

    @media (max-width: 768px) {
        gap: 1rem;
        margin: $spacing-base 4%;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 480px) {
        margin: $spacing-base 2%;
        gap: 0.8rem;
    }
}
</style>