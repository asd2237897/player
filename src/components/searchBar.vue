<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" />
      <button>
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <a class="bar-item active">搜索结果</a>
        <a class="bar-item">歌曲播放</a>
        <a class="bar-item">mv</a>
        <a class="bar-item">歌曲评论&gt;</a>
        <a class="bar-item">推荐歌曲</a>
      </div>
      <!-- 对应的内容区域 -->
      <div class="tab-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBar"
};
</script>

<style>
</style>
