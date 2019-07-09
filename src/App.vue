<template>
  <div>
    <searchbar></searchbar>

    <!-- 对应的内容区域 -->
    <div class="tab-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//导入组件
import searchbar from "./components/searchBar.vue";

export default {
  name: "app",
  //局部组件注册
  components: {
    searchbar
  }
};
</script>

<style>
</style>
