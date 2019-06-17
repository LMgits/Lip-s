<template>
    <div id="app">
        <MyShoppingCart></MyShoppingCart>
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
