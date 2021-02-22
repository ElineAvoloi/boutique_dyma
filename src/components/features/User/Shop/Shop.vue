<template>
 <shop-products-list :products="products" class="p-3"></shop-products-list>
</template>

<script>

import ShopProductsList from './ShopProductsList'
import { eventBus } from '../../../../main'

export default {
  components: {
    ShopProductsList
  },
  // on est dans un component du coup data est un fonction qui return un objet
  // et notre data retourne product en array vide
  data() {
   return {
      products : []
   }
  },
  // on récupère le product de event bus pour MAJ
  created() {
    this.products = eventBus.products;
    eventBus.$on('update:products', (products) => {
      this.products = products;
    })
  }
}
</script>

<style>
</style>
