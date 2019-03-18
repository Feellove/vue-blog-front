<template>
  <el-dropdown trigger="click" class="music_box" @command="playList">
    <span class="el-dropdown-link music_list_box"></span>
    <div class="play_tools">
      <span class="play_tools_list prev" @click="prev"></span>
      <span class="play_tools_list" :class="cdCls" @click="play"></span>
      <span class="play_tools_list next" @click="next"></span>
    </div>
    <audio id="audio" src="../../../static/longTime.mp3" ref="audio" @ended="end"></audio>
    <img
      src="../../../static/img/blog-bg.jpg"
      alt
      class="play_bg"
      :class="{'play_bg_rotate':status}"
    >
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        :command="list.url"
        v-for="(list,index) in playLists"
        :key="index"
      >{{list.name}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      playLists: [
        {
          url: [{ index: 1, src: "../../../static/longTime.mp3" }],
          name: "小智 - 少龙的回忆"
        },
        {
          url: [{ index: 2, src: "../../../static/Bandari - Snowdreams.mp3" }],
          name: "Bandari - Snowdreams"
        },
        {
          url: [{ index: 3, src: "../../../static/butiful.mp3" }],
          name: "成龙、金喜善 - 美丽的神话"
        }
      ]
    };
  },
  created() {},
  computed: {
    cdCls() {
      return this.status ? "play" : "play pause";
    }
  },
  methods: {
    end() {
      this.$refs.audio.pause();
      this.status = false;
    },
    play() {
      if (!this.status) {
        //初始状态未播放，点击播放
        this.$refs.audio.play();
        this.status = true;
      } else {
        //已经在播放，点击暂停
        this.$refs.audio.pause();
        this.status = false;
      }
    },
    playList(command, key) {
      console.log(key);
      this.$refs.audio.src = command[0].src;
      this.status = false;
      this.play();
    },
    prev() {},
    next() {}
  }
};
</script>

<style scoped>
.music_box {
  position: fixed;
  right: 20px;
  top: 138px;
  width: 80px;
  height: 80px;
  background: #fff;
  z-index: 999;
  border-radius: 50%;
}
.play_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 50%;
  object-fit: cover;
  -webkit-filter: blur(2px);
  filter: blur(2px);
}
.play_tools {
  position: absolute;
  top: calc(50% - 10px);
  height: 20px;
  z-index: 100;
  width: 100%;
  text-align: center;
  line-height: 20px;
  outline: none;
}
.play_tools_list {
  border-radius: 50%;
  display: inline-block;
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 0.8;
}
.music_list_box {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  outline: none;
  bottom: 0;
  left: calc(50% - 10px);
  z-index: 100;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
}
.prev {
  background: url(../../../static/img/left-circle-fill.png) no-repeat center;
}
.play {
  background: url(../../../static/img/poweroff-circle-fill.png) no-repeat center;
}
.play.pause {
  background: url(../../../static/img/play-circle-fill.png) no-repeat center;
}
.next {
  background: url(../../../static/img/right-circle-fill.png) no-repeat center;
}
.music_list_box {
  background: url(../../../static/img/outdent.png) no-repeat center;
  background-size: contain;
}
.prev:hover,
.play:hover,
.next:hover,
.music_list_box:hover {
  opacity: 1;
}
.el-dropdown-menu {
  width: 300px;
}
.play_bg_rotate {
  animation: play_bg_rotate 5s linear infinite;
  -webkit-animation: play_bg_rotate 5s linear infinite; /* Safari 和 Chrome */
}
@keyframes play_bg_rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>