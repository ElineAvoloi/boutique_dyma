<template>
  <nav class="navbar navbar-light bg-light navbar-expand-lg">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" width="30" height="30" />
      Dyma
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" @click="changePage('User')" >Boutique</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="changePage('Admin')">Admin</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

  import { eventBus } from '../main'

  export default {
    data() {
      return {
        page: eventBus.page
      }
    },
    methods : {
      changePage(page) {
        eventBus.changePage(page);
      }
    },
    created() {
      eventBus.$on('update:page', (page) => {
        this.page = page 
      })
    }
  }
</script>

<style>
 a {
   cursor: pointer;
 }
</style>