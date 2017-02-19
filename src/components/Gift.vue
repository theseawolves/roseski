<template lang="html">
  <div class="gift" >

    <div class="category">
      <swiper dots-position="center" dots-class="category-dot">
        <swiper-item v-for="category in categories">
          <flexbox wrap="wrap" :gutter="0">
            <flexbox-item :span="1/5" v-for="item in category">
              <svg class="icon" aria-hidden="true">
                <use v-bind="{'xlink:href':'#icon-' + item.id}"></use>
              </svg>
              <span>{{ item.name }}</span>
            </flexbox-item>
          </flexbox>
        </swiper-item>
      </swiper>
    </div>

    <div class="tag">
      <swiper :show-dots="false" height="40px">
        <swiper-item v-for="tag in tags">
          <flexbox :gutter="0" align="center">
            <flexbox-item :span="1/5" v-for="item in tag">
              {{ item.name }}
            </flexbox-item>
          </flexbox>
        </swiper-item>
      </swiper>
    </div>


    <div class="issue" v-for="item in issues" >
      <div class="issue-item" >
        <div class="title">
          {{ item.title}}
        </div>
        <divider>
          <a href="" class="tag">{{ item.tag }}</a>
          <span>{{ item.date }}</span>
        </divider>

        <swiper height="400px" :show-dots="false">
          <swiper-item class="larger">
            <img :src="item.commodityImg" alt="" />
            <div class="desc">
              <span class="title">{{ item.commodityTitle }}</span>
              <span class="price">￥{{ item.commodityPrice }}</span>
            </div>
          </swiper-item>
        </swiper>

        <swiper height="200px" :show-dots="false">
          <swiper-item v-for="tiny in item.tinyList" class="tiny">
            <flexbox  :gutter="10">
              <flexbox-item v-for="item in tiny">
                <img :src="item.commodityImg" alt="" />
                <div class="desc">
                  <span class="title">{{ item.commodityTitle }}</span>
                  <span class="price">￥{{ item.commodityPrice }}</span>
                </div>
              </flexbox-item>
            </flexbox>
          </swiper-item>
        </swiper>

      </div>

    </div>

    <load-more :tip="tip" :show-loading="busy" @click.native="loadMore"></load-more>





  </div>
</template>

<script>
import {  Swiper, SwiperItem, Flexbox, FlexboxItem, Divider, XButton,LoadMore } from 'vux'



var count = 0
export default {
  name: 'Gift',
  data () {
    return {
      tip: '点击加载更多',
      busy: false,
      allLoaded: false,
      categories: [
        [{ id: 'liyuxianhua', name: '礼遇鲜花'},
        { id: 'xiezibaobao', name: '鞋子包包'},
        { id: 'gongzibaozhen', name: '公仔抱枕'},
        { id: 'xiangshuixiangxun', name: '香水香熏'},
        { id: 'shishangpeishi', name: '时尚配饰'},
        { id: 'qiaokeli', name: '巧克力'},
        { id: 'yizhuoliangpin', name: '衣着良品'},
        { id: 'weijinshoutao', name: '围巾手套'},
        { id: 'shumajixie', name: '数码机械'},
        { id: 'jiajuliangpin', name: '家具良品'}],

        [{ id: 'meihujianshen', name: '美护健身'},
        { id: 'chanshiguanqu', name: '铲屎官区'},
        { id: 'xinyihezi', name: '心意盒子'},
        { id: 'shumajixie', name: '数码机械'},
        { id: 'bangongliangpin', name: '办公良品'},
        { id: 'dongmanjifu', name: '动漫基腐'},
        { id: 'wenjuqiapian', name: '文具卡片'}]
      ],
      tags: [
        [{ id: 1, name: '表白'},
        { id: 1, name: '浪漫'},
        { id: 1, name: '表白'},
        { id: 1, name: '浪漫'},
        { id: 1, name: '表白'}],
        [{ id: 1, name: '浪漫'},
        { id: 1, name: '表白'},
        { id: 1, name: '浪漫'},
        { id: 1, name: '表白'}],
      ],
      issues: [
        {
          campaignId: 2,
          title: "第二期 浪漫礼物送给她，天天都过情人节",
          tag: "表白",
          tagId: "2",
          date: "2016-12-13 00:00:00",
          commodityId: "4",
          commodityImg: null,
          commodityTitle: "井口满天星花束",
          commodityPrice: "198",
          tinyList: [
            [{
              commodityId: "3",
              commodityTitle: "唯美清新手工发箍",
              commodityPrice: "33",
              commodityImg: null
            },
            {
              commodityId: "6",
              commodityTitle: "春暖花开生日蛋糕",
              commodityPrice: "218",
              commodityImg: null
            }],
            [{
              commodityId: "7",
              commodityTitle: "春暖花开生日蛋糕2",
              commodityPrice: "300",
              commodityImg: null
            },
            {
              commodityId: "7",
              commodityTitle: "春暖花开生日蛋糕2",
              commodityPrice: "300",
              commodityImg: null
            }],
          ]}
      ]
    }
  },
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Divider,
    XButton,
    LoadMore
  },
  methods: {
    loadMore() {
      this.busy = true
      this.tip = '努力加载中...'
      setTimeout(() => {

        var data = {
          campaignId: 2,
          title: "第二期 浪漫礼物送给她，天天都过情人节",
          tag: "表白",
          tagId: "2",
          date: "2016-12-13 00:00:00",
          commodityId: "4",
          commodityImg: null,
          commodityTitle: "井口满天星花束",
          commodityPrice: "198",
          tinyList: [
            [{
              commodityId: "3",
              commodityTitle: "唯美清新手工发箍",
              commodityPrice: "33",
              commodityImg: null
            },
            {
              commodityId: "6",
              commodityTitle: "春暖花开生日蛋糕",
              commodityPrice: "218",
              commodityImg: null
            }],
            [{
              commodityId: "7",
              commodityTitle: "春暖花开生日蛋糕2",
              commodityPrice: "300",
              commodityImg: null
            },
            {
              commodityId: "7",
              commodityTitle: "春暖花开生日蛋糕2",
              commodityPrice: "300",
              commodityImg: null
            }],
          ]}
        this.issues.push(data)
        this.tip = '加载更多'
        this.busy = false


      }, 1500)

    }
  },
  mounted () {

  }

}
</script>

<style lang="less">
.gift {
  margin-bottom: 50px;
  height: 100%;
}
.category {
  background-color: white;
}
.category svg {
  width: 35px;
  height: 35px;
}
.category .vux-flexbox-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  padding-top: 18px;

}
.category .vux-flexbox-item > span {
  padding-top: 5px;
}
.vux-slider > .vux-indicator.category-dot > a > .vux-icon-dot.active {
  background-color: #ddb63f;
}

.tag {
  background-color: white;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
}
.tag .vux-flexbox {
  height: 100%;
}
.tag .vux-flexbox-item {
  text-align: center;
  color: #ddb63f;
}

.issue {
  margin-top: 10px;
  background-color: white;
  padding: 10px;
}
.issue img {
  background-color: #ccc;
}
.issue .issue-item {
  margin-top: 20px;
}
.issue .issue-item .title {
  text-align: center;
  font-size: 14px;
  //padding-top: 10px;
}
.issue .issue-item .vux-divider {
  font-size: 12px;
}
.issue .issue-item .vux-divider .tag {
  color: #ddb63f;
  padding-right: 10px;
}
.issue .issue-item .vux-swiper-item {
  display: flex;
  flex-direction: column;
}
.issue .issue-item .vux-flexbox {
  flex-basis: auto;
}

.issue .issue-item .vux-swiper-item.larger > img {
  height: 380px;
  width: 100%;
}
.issue .issue-item .vux-swiper-item.larger > .desc,
.issue .issue-item .vux-swiper-item.tiny .desc {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 5px 0;
}
.issue .issue-item .vux-swiper-item.larger > .desc > .price {
  color: red;
}

.issue .issue-item .vux-swiper-item.tiny  img {
  height: 180px;
  width: 100%;
}

.issue .issue-item .vux-swiper-item.tiny .vux-flexbox-item {
  display: flex;
  flex-direction: column;
}


.issue .issue-item .vux-swiper-item.tiny .desc > .price {
  color: red;
}



</style>
