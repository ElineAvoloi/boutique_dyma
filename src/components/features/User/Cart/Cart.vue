<template>
  <div>
    <cart-products-list :cart="cart"></cart-products-list>
  </div>
</template>

<script>
import CartProductsList from './CartProductsList'
import { eventBus } from '../../../../main'

export default {
  components: {
    CartProductsList
  },
  // on est dans un component du coup data est une fonction qui return un objet
  // notre data retourne cart product en array vide
  data() {
    return {
      cart : []
    }
  },
  created() {
    this.cart = eventBus.cart;
    eventBus.$on("update:cart", (cart) => (this.cart = cart));
    this.item = eventBus.item;
    eventBus.$on("delete:item"), (item) => (this.item = item)
  }
}
</script>

<style>
</style>
