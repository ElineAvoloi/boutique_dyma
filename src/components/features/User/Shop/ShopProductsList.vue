<template>
  <div class="d-flex flex-row flex-wrap">
    <!-- Ici on met un :key pour dire à Vue que les shop product item  ne sont pas interchangeables et que l'id est unique -->
    <shop-product-item v-for="product in products" :product="product" :key="product.id"></shop-product-item>  
  </div>
</template>

<script>
import ShopProductItem from './ShopProductItem'

export default {
  components: {
    ShopProductItem
  },
  props : ['products']
}
</script>

<style>
</style>
