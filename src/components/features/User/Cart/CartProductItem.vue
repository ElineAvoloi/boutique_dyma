<template>
  <div>
    <div class="d-flex flex-row justify-content-between m-2 align-items-center ">
      <h3> {{ item.title }} </h3>
      <span> <strong> {{ item.price}} €</strong> </span>
    <button class="close" @click="deleteProduct"> <span>&times;</span> </button>
    </div>
  </div>
</template>

<script>

import {eventBus} from '../../../../main'

export default {
  props : ['item'],
  methods : {
    deleteProduct() {
      eventBus.deleteProduct({...this.item})
    }
  }
}
</script>

<style>
.item-container {
  height:300px;
}
</style>
