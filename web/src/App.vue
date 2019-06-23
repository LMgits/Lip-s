<template>
  <div id="app">
    <vheader class="header"></vheader>
    <router-view></router-view>
  </div>
</template>
<script>
import MyShoppingCart from './components/ShoppingCart.vue';

export default {
    name: 'app',
    components: {
        MyShoppingCart
    }
};
</script>
<style>
@import '~@/assets/font/one/iconfont.css'
</style>
<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
