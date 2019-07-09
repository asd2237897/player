<template>
  <div class="comment-wrapper">
    <div class="items" v-for="(item,index) in commentList" :key="index">
      <div class="item">
        <div class="left">
          <img :src="item.user.avatarUrl" alt />
        </div>
        <div class="right">
          <div class="top">
            <span class="user">{{item.user.nickname}}</span>
            <span class="content">{{ item.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">{{item.time | gettime}}</div>
            <div class="like-wrapper">
              <span>👍</span>
              ({{item.likedCount}})
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentList: []
    };
  },
  created() {
    this.$axios
      .get(
        `https://autumnfish.cn/comment/hot?id=${this.$route.params.id}&type=0`
      )
      .then(res => {
        this.commentList = res.data.hotComments;
      }); 
  },
};
</script>

<style>
</style>
