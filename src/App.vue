<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <component :is="page">
        
      </component>
    </div>
    
  </div>
</template>

<script>

import { eventBus } from './main';
import TheHeader from './components/TheHeader';
import Admin from './components/features/Admin/Admin';
import User from './components/features/User/User'


export default {
  name: 'App',
  components: {
    TheHeader,
    User,
    Admin
  },
  data() {
    return {
      page : eventBus.page
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
</style>
