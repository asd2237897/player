<template>
  <div class="video">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{mvName}}</span>
      <span class="artist">{{songer | formatSinger}}</span>
    </div>
    <video :src="mvUrl" controls></video>
  </div>
</template>

<script>
export default {
  name: "video",
  data() {
    return {
      //歌手名
      songer: "",
      //mv地址
      mvUrl: "",
      //mv名字
      mvName: ""
    };
  },
  created() {
    //获取axios地址
    this.$axios
      .get(`https://autumnfish.cn/mv/url?id=${this.$route.params.mvid}`)
      .then(res => {
        this.mvUrl = res.data.data.url;
      });
    this.$axios
      .get(`https://autumnfish.cn/mv/detail?mvid=${this.$route.params.mvid}`)
      .then(res => {
        this.mvName = res.data.data.name;
        this.songer = res.data.data.artists;
      });
  },
  
};
</script>

<style>
</style>
