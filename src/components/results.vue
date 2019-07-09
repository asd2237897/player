<template>
  <div class="result-wrapper">
    <div class="song" v-for="(item,index) in musicList" :key="index">
      <div class="name">
        <span class="iconfont icon-play" @click="goPlay(item.id)"></span>
        {{item.name}}
        <span
          class="iconfont icon-editmedia"
          v-if="item.mvid!=0"
          @click="goVideo(item.mvid)"
        ></span>
        <span class="iconfont" @click="goComment(item.id)">查看评论</span>
      </div>
      <div class="singer">{{item.artists | formatSinger}}</div>
      <div class="album">《{{item.album.name}}》</div>
      <div class="time">{{item.duration | formatTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "results",
  data() {
    return {
      musicList: []
    };
  },
  //侦听器
  watch:{
    //方法名就是要侦听的数据名
    '$route.params.search'(){
      this.getMusic()
    }
  },
  created() {
    this.getMusic()
  },
  filters: {
    formatTime(time) {
      // 毫秒变秒
      const totalSec = Math.floor(time / 1000);
      // 分
      let minute = Math.floor(totalSec / 60);
      minute = minute < 10 ? "0" + minute : minute;
      // 秒
      let sec = totalSec % 60;
      sec = sec < 10 ? "0" + sec : sec;
      // 返回
      return minute + ":" + sec;
    }
  },
  methods: {
    getMusic() {
      this.$axios
        .get(
          `https://autumnfish.cn/search?keywords=${this.$route.params.search}`
        )
        .then(res => {
          this.musicList = res.data.result.songs;
        });
    },
    goPlay(id){
      this.$router.push(`/player/${id}`)
    },
    goVideo(mvid) {
      this.$router.push(`/video/${mvid}`);
    },
    goComment(id) {
      this.$router.push(`/comment/${id}`);
    }
  }
};
</script>

<style>
.result-wrapper {
  margin: 0 auto;
}
</style>
