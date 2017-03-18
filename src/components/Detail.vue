<template lang="html">
  <div class="detail">
    <header class="detail-header">
      <div class="detail-header-left" @click="handleBack">
        <svg class="icon" aria-hidden="true">
          <use  xlink:href='#icon-fanhui'></use>
        </svg>
      </div>
      <h1  class="detail-header-center">{{this.$route.query.name}}</h1>
      <div class="">
      </div>
    </header>


    <section class="container">
      <section class="img">
        <swipe :auto="0">
          <swipe-item v-for="i in 3">
            <img src="" alt="" />
          </swipe-item>
        </swipe>
      </section>
      <section class="title">
        <h2>{{this.$route.query.name}}</h2>
        <div class="sale">已售：888 件</div>
      </section>
      <section class="desc">
        <p>
          已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售已售
        </p>
      </section>
      <section class="price">
        <span><i>￥</i>100</span>
        <del>￥200</del>
      </section>
      <section class="ems">
        <p>
          快递： 免运费
        </p>
      </section>
    </section>
    <section class="social">
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use  xlink:href='#icon-songgeiTA'></use>
        </svg>
        <span>送给Ta</span>
      </div>
      <div class="item"><span class="line"></span></div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use  xlink:href='#icon-xihuan'></use>
        </svg>
        <span>收藏</span>
      </div>
      <div class="item"><span class="line"></span></div>

      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use  xlink:href='#icon-jiarugouwuche'></use>
        </svg>
        <span>加入购物车</span>
      </div>
      <div class="item"><span class="line"></span></div>

      <div class="item">
        <span>去天猫购买</span>
      </div>
    </section>
    <section class="related">
      <h3>更多浪漫</h3>
      <section class="wrap">
        <router-link  :to="{name:'detail',query:{id:i,name:'标题标题标题标题'+i}}" v-for="i in 4" class="item">
          <header>
            <img src="" alt="" />
          </header>
          <h3>标题标题标题标题</h3>
          <section class="price">
            <span><i>￥</i>100</span>
            <del>￥200</del>
          </section>
        </router-link>

      </section>

    </section>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe'

export default {
  name: 'Detail',
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    handleBack () {
      this.$router.push({path:'/'})
    },
  }

}
</script>

<style lang="css" scoped>
.detail {
  margin-bottom: 120px;
}
.detail-header {
  height: 88px;
  background-color: #ddb63f;
  display: flex;
  align-items: center;
  color: white;
}

.detail-header .detail-header-left {
  padding-left: 23px;
}
.detail-header > * {
  flex: 1;
}
.detail-header svg {
  width: 44px;
  height: 44px;
  fill: white;

}
.detail-header .detail-header-center {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.detail .container, .detail .social, .detail .related {
  margin-top: 20px;
  background-color: white;
  padding: 0 30px;
}
.detail .container .img {
  height: 600px;
}
.detail .container img {
  height: 600px;
  width: 100%;
  background-color: #ddd;
}
/*.detail>.container>.img>.mint-swipe>.mint-swipe-indicators>.mint-swipe-indicator.is-active {
  background: #ddb63f;
}*/
.detail .container .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail .container .desc > p {
  line-height: 1.8;
}
.detail .container .ems {
  padding-bottom: 20px;
}
.detail .container .title, .detail .container .desc, .detail .container .price,.detail .container .ems {
  margin-top: 15px;
}
.detail .container .price span, .detail .related .price span {
  font-size: 32px;
  color: #ff6000;
  font-weight: 700;

}
.detail .container .price span i, .detail .related  .price span i {
  font-size: 22px;
  font-weight: 400;
}
.detail .container .price del, .detail .related  .price del {
  font-size: 22px;
  font-weight: 400;
  color: #aaa;
  margin-left: 10px;
}
.detail .social {
  display: flex;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #ddd;
  justify-content: space-between;
  font-size: 24px;
  color: #333;

}
.detail .social > .item {
  display: flex;
  align-items: center;
}
.detail .social > .item:last-of-type {
  background-color: red;
  padding: 5px 10px;
  color: #fff;
  font-weight: 600;
}
.detail .social svg {
  height: 35px;
  width: 35px;
  margin-right: 15px;

}
.detail .social > .item > .line {
  border-left: 1px solid #333;
  line-height: 30px;
  height: 30px;
  width: 1px;
}

.detail .related {
  padding: 10px;

}
.detail .related h3 {
  padding: 0 10px;
  font-weight: 700;
  line-height: 68px;
  font-size: 30px;
  color: #333;
  //margin-bottom: 20px;
}
.detail .related .wrap > a.item {
  display: inline-block;
  padding: 0 10px;
  margin-bottom: 50px;
}
.detail .related .wrap img {
  display: block;
  width: 345px;
  height: 345px;
  background-color: #ddd;
}
.detail .related .wrap h3 {
  line-height: 65px;
  height: 65px;
  color: #333;
  font-weight: 700;
  font-size: 28px;
}
</style>
