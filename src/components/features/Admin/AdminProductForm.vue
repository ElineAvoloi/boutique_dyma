<template>
 <form @submit="trySubmit" class="d-flex flex-column ">
     <h3>Ajouter un produit : </h3>
     <hr class="w-100"> 
     <div class="form-group">
        <label for="img">Image</label>
        <input type="text" class="form-control" v-model="form.image"> 
     </div>
      <div class="form-group">
        <label for="">Titre du produit</label>
        <input type="text" class="form-control" v-model="form.titre"> 
     </div>

    <div class="form-group">
        <label for="">Description</label>
        <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="form.desc"></textarea>
    </div>

    <div class="form-group">
        <label for="">Prix</label>
        <input type="number" class="form-control" v-model.number="form.prix"> 
    </div>
    <ul v-if="errors.length">
            <li v-for="error in errors" :key="error" :error="error">
              {{error}}
            </li>
          </ul>
    <button type="submit" class="btn btn-primary">Ajouter</button>


 </form>
</template>

<script>

import {eventBus} from '../../../main'

export default {
    data() {
        return {
            form: {
                image: '',
                titre: '',
                desc : '',
                prix : ''
            },
            errors : []
        }
    },
    methods: {
        trySubmit(e) {
            e.preventDefault();
            if(this.formIsValid()) {
                eventBus.addProductToShop({ ...this.form });
                this.resetForm();
                eventBus.changePage('User');
            }
        },
        resetForm() {
            this.form = {
                image: '',
                titre: '',
                desc : '',
                prix : ''
            }
        },
       formIsValid() {
           this.errors = [];
           if (!this.form.image) {
               this.errors.push('img required')
           }
           if (!this.form.titre) {
               this.errors.push('Title required')
           }
           if (!this.form.desc) {
               this.errors.push('Desc required')
           }
           if (!this.form.prix) {
               this.errors.push('Price required')
           }
           return this.errors.length ? false : true;
       }
    }
}
</script>