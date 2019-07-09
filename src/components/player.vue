<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" src="../assets/img/cover.png" alt />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets/img/tag.png" alt />
        <span>{{musicName}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{songer | formatSinger}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{albumName}}</span>
      </div>
      <audio class="audio" autoplay controls :src="musicUrl"></audio>
      <ul class="lyric-container" v-for="(item,index) in lyricList" :key="index">
        <li class="lyric">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "player",
  data() {
    return {
      //歌曲名称
      musicName: "",
      //歌手
      songer: "",
      //封面
      picUrl: "",
      //专辑名称
      albumName: "",
      //歌曲播放链接
      musicUrl: "",
      //歌词
      lyricList: []
    };
  },
  created() {
    this.$axios
      .get(`https://autumnfish.cn/song/url?id=${this.$route.params.id}`)
      .then(res => {
        this.musicUrl = res.data.data[0].url;
      });
    this.$axios
      .get(`https://autumnfish.cn/song/detail?ids=${this.$route.params.id}`)
      .then(res => {
        //获取歌曲名称
        this.musicName = res.data.songs[0].name;
        //获取歌曲封面
        this.picUrl = res.data.songs[0].al.picUrl;
        //获取专辑名称
        this.albumName = res.data.songs[0].al.name;
        //获取歌手名
        this.songer = res.data.songs[0].ar;
      });
    this.$axios
      .get(`https://autumnfish.cn/lyric?id=${this.$route.params.id}`)
      .then(res => {
        this.lyricList = res.data.lrc.lyric.split("\n");
        for (let i = 0; i < this.lyricList.length; i++) {
          this.lyricList[i] = this.lyricList[i].slice(11);
        }
      });
  }
};
</script>

<style>
</style>
