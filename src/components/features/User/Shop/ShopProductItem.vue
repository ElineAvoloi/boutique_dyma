<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px" :src="product.img">
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr>
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span> <strong>{{ product.price }} €</strong></span>
      <button class="btn btn-primary btn-sm float-right" @click="addProductToCart">Commander</button>
    </div>
  </div>
</template>

<script>

import {eventBus} from '../../../../main'



// ici nous ne mettons pas de propriétés data car nous centralisons les données dans l'instance Vue de eventBus
export default {
  props : ['product'],
  methods : {
    // ici on passe une copie de produits
    // on utilise donc une déconstruction de notre objet
    // les 3 ... prend toutes les keys de notre this.product et les mets dans un nouvel objet
    addProductToCart() {
     eventBus.addProductToCart({ ...this.product })
     console.log("add")
    }
  }
}
</script>

<style>
.product-container {
  height: 400px;
}
</style>
