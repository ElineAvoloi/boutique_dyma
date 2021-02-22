import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté limpossible. Cest le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      },
      {
        id: '2',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/e2/0e/1a/1707746/1540-0/tsp20180327114010/PC-Portable-Gaming-Acer-Predator-21-X-GX21-71-76VC-21-Incurve.jpg',
        title: 'Predator',
        description: 'The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.',
        price: 2300
      },
      {
        id: '3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté limpossible. Cest le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      },
      {
        id: '4',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté limpossible. Cest le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      },
      {
        id: '5',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/e2/0e/1a/1707746/1540-0/tsp20180327114010/PC-Portable-Gaming-Acer-Predator-21-X-GX21-71-76VC-21-Incurve.jpg',
        title: 'Predator',
        description: 'The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.',
        price: 2300
      },
      {
        id: '6',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté limpossible. Cest le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      }
    ],
    cart : [
     
    ],
    page : 'Admin',
  },
  methods : {
    addProductToCart(product) {
      // on a mis une key sur notre liste donc on a doit lui fournir une key qui soit unique donc si on veut ajouter 2x le même pdt cela créer une erreur
      // on veut éviter donc de pouvoir ajouter un pdt dans le panier si il y est déjà
      // map() on a un array avec des id différents
      if(!this.cart.map(i => i.id).includes(product.id)) {
        // maintenant on ne peut plus ajouter deux fois le meme produit
        this.cart = [...this.cart, product];
        // slice retourne une copie de this carte avec une nouvelle réf
        this.$emit('update:cart', this.cart.slice());
      } 
    },
    deleteProduct(item) {
      this.cart = this.cart.slice().filter(i => i.id !== item.id)
      this.$emit('update:cart', this.cart.slice());
    },
    changePage(page) {
      this.page = page;
      this.$emit('update:page', page);
    },
    addProductToShop(product) {
      this.products = [...this.products, {...product, id: this.products.length + 1 + ''}],
      this.$emit('update:products', this.products)
    }
}
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
