<template>
  <div>
    <searchbar></searchbar>
    <router-view></router-view>
  </div>
</template>

<script>

//导入组件
import searchbar from "./components/searchBar.vue";

export default {
  name: 'app',
  //局部组件注册
  components: {
    searchbar
  }
}
</script>

<style>
</style>
