<template>
  <div>
    <x-header :left-options="leftOptions" :right-options="rightOptions">{{title}}</x-header>
    <router-view></router-view>
    <tabbar>
      <tabbar-item link="http://baidu.com">
        <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-fabu"></use>
        </svg>
        <span slot="label"></span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import './assets/iconfont.js?strict=false'
import { Tabbar, TabbarItem, XHeader } from 'vux'

export default {
  name: 'app',
  data () {
    return {
      title: '礼物',
      leftOptions: {
        showBack: false
      },
      rightOptions: {
        showMore: false
      }
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/iconfont.css';

body {
  background-color: #f5f5f5;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.weui_tabbar svg {
  width: 24px;
  height: 24px;
}
</style>
