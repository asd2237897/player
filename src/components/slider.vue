<template>
  <el-carousel :interval="4000" type="card" height="240px">
    <el-carousel-item v-for="item in banners" class="my-element">
      <img :src="item.pic" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    this.$axios.get("https://autumnfish.cn/banner?type=2").then(res => {
      // console.log(res);
      this.banners = res.data.banners;
    });
  }
};
</script>

<style>
.my-element img{
  width: 100%;
  height: 240px;
}
</style>
