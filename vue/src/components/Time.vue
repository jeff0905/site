<template>
  <div class="time" v-on:dragstart="dragstart($event)" v-on:dragover="dragmove($event)" v-on:dragend="dragend($event)" draggable=true >
    <Time-Item v-on:click="select()" class="item" />
    <Time-Item  draggable=true />
    <Time-Item  draggable=true />
  </div>
</template>
<script>
import TimeItem from './TimeItem';

export default {
  name: 'Time',
  components: {
    'Time-Item': TimeItem,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    dragstart: function(e) {
      console.log("拖拽开始", e);
    },
    dragmove: function(e) {
      console.log('move', e);
    },
    dragend: function(e) {
      console.log('end', e);
    }
  }
};
</script>
<style lang="less">
  .item {

  }
</style>
