<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model="search" @keyup.enter="searchMusic" />
      <button @click="searchMusic">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <router-Link to="/results" active-class="active" class="bar-item">搜索结果</router-Link>
        <router-Link to="/player" active-class="active" class="bar-item">歌曲播放</router-Link>
        <router-Link to="/video" active-class="active" class="bar-item">mv</router-Link>
        <router-Link to="/comment" active-class="active" class="bar-item">歌曲评论</router-Link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchMusic() {
      this.$router.push(`/results/${this.search}`);
    }
  }
};
</script>

<style>
</style>
