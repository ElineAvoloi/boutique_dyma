<template>
  <div  class="d-flex flex-column p-5 ">
    
    <h5>Mon panier</h5>
    <cart-product-item v-for="item in cart" :item="item" :key="item.id"></cart-product-item>
    <!-- Si cart est vide on n'affiche pas ce bloc -->
    <template  v-if="cart.length" >
      <hr class="w-100">
    <span> Total : {{ total }} € </span>
    </template>
  </div>
</template>

<script>
import CartProductItem from './CartProductItem'

export default {
  components: {
    CartProductItem
  },
  props : ['cart'],
  computed: {
    total() {
      // reduce prend une fonction de call back et cette fonction prend un accumulateur et une valeur. Un accumulateur est une valeur qui va rester telle quelle au fur et à mesure des itérations. 
      // reduce va parcourir this.cart et additionner le price
      return this.cart.reduce((acc, v) => {
        acc += v.price;
        // on retourne tjrs l'accumulateur
        return acc;
      }, 0)
    }
  }
}
</script>

<style>
h5 {
  border-bottom: 1px solid rgb(150, 72, 72);
  padding-bottom: 10px;
  
}
</style>
