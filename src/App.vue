<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/tabbar/home_active.svg" alt="">
        <div slot="item-title">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/tabbar/category_active.svg" alt="">
        <div slot="item-title">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop-cart">
        <img slot="item-icon" src="./assets/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/tabbar/shopcart_active.svg" alt="">
        <div slot="item-title">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/tabbar/profile_active.svg" alt="">
        <div slot="item-title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/TabBar";
  import TabBarItem from "./components/TabBarItem";

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>
