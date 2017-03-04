<template>
  <div>
    <router-view></router-view>
    <footer>
      <div class="container">
        <a href="http://baidu.com" class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fabu"></use>
          </svg>
        </a>

      </div>
    </footer>
  </div>
</template>

<script>
import './assets/iconfont.js?strict=false'


export default {
  name: 'app'
}
</script>

<style lang="less">
@import './assets/iconfont.css';

body {
  background-color: #f5f5f5;
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #333;
}
img {
  max-width: 100%;
}
h1 {
  font-size: 36px;
}

footer {
  height: 100px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  border-top: 1px solid #ddd;
  background-color: #3d3d3f;
  opacity: .95;
}
footer .container {
  display: flex;
  align-items: center;
  justify-content: center;
}
footer .item {
  position: relative;
}
footer svg {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -20px;
  left: -50px;
}
</style>
