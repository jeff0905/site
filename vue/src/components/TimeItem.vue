<template>
    <div class="time-item">
      <div class="item-date-row">
        <div class="date-left time-left-split">
          <span class="date-text">2018-4-8</span>
          <div class="lines"></div>
          <div class="date-icons">
            <Calendar-Icon/>
          </div>
        </div>
        <div class="date-right" />
      </div>
      <div class="line" />
      <div class="item-time-row">
        <div class="time-left  time-left-split">
          <span class="date-text">09:14</span>
          <div class="lines"></div>
          <div class="date-icons">
            <Clock-Icon/>
          </div>
        </div>
        <div class="time-right">
          <div class="time-event">
              <Arrow-Up-Icon fillColor="#f44336"/>事件事件
          </div>
          <div class="time-flag">
              <div class="time-flag-item">人物</div>
              <div class="time-flag-item">地点</div>
          </div>
          <div class="event-desc">
              事件详情
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import CalendarIcon from 'vue-material-design-icons/calendar.vue';
import Clock from 'vue-material-design-icons/clock.vue';
import ArrowUp from 'vue-material-design-icons/arrow-up.vue';
export default {
  name: 'TimeItem',
  components: {
    'Calendar-Icon': CalendarIcon,
    'Clock-Icon': Clock,
    'Arrow-Up-Icon': ArrowUp,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="less">
@import './../assets/styles/mixins.less';
.material-design-icon > .material-design-icon__svg{
  position:relative;
  bottom:0;
}
.time-item {
  .flexbox();
  border: 1px solid #ddd;
  border-radius:6px;
  flex-direction: column;
  padding: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.18);
  position:relative;
  .date-text {
    flex: 1;
    padding-right: 20px;
  }
  .date-icons {
    width: 16px;
    height: 16px;
    position:absolute;
    right:0;
    display:block;
    background:#fff;
  }
  .lines {
    position: absolute;
    width: 2px;
    top: 0px;
    bottom: -10px;
    right: 7px;
    display: block;
    background: -webkit-gradient(linear, left top,
      left bottom, from(#eee), color-stop(#a7a4a4), to(#eee));
    background: linear-gradient(-180deg, #eee, #a7a4a4, #eee);
  }
  .item-date-row {
    width:100%;
    text-align:left;
    .flexbox();
    flex-direction: row;
    .date-left{
      flex:1;
      text-align:right;
      .flexbox();
      flex-direction: row;
      position:relative;
    }
    .date-right{
      flex: 4;
    }
  }
  .item-time-row {
    .flexbox();
    flex-direction: row;

    .time-left {
      width:60px;
      flex: 1;
      text-align:right;
      .flexbox();
      flex-direction: row;
      position:relative;
    }
    .time-right {
      flex: 4;

      .time-event {
        width:100%;
        background: rgba(0,0,0,.3);
        text-align: left;
        font-weight:bold;
      }
      .time-flag {
        .flexbox();
        flex-direction: row;
        .time-flag-item {
          padding: 0 4px;
        }
      }
      .event-desc {
        text-align:left;
      }
    }


  }
}
</style>
