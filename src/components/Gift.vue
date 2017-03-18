<template lang="html">
  <div class="gift" >
    <header class="gift-header">
      <h1>礼物</h1>
    </header>

    <section class="gift-category">
      <swipe :auto="0">
        <swipe-item v-for="category in categories">
          <a href="#" class="container">
            <div v-for="item in category" class="item" @click.stop.prevent="handleCategory(item)">
              <svg class="icon" aria-hidden="true">
                <use v-bind="{'xlink:href':'#icon-' + item.id}"></use>
              </svg>
              <span>{{ item.name }}</span>
            </div>
          </a>
        </swipe-item>
      </swipe>
    </section>

    <section class="gift-tag">
      <swipe :auto="0" :showIndicators="false">
        <swipe-item v-for="tag in tags">
          <div class="container">
            <router-link v-for="item in tag" :to="{name:'tag',query:{id:item.id,name:item.name}}" class="item">#{{ item.name }}</router-link>
          </div>
        </swipe-item>
      </swipe>
    </section>


    <section
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="60">

      <div class="gift-issue" v-for="item in issues" >
        <div class="issue-item" >
        <div class="title">
          <h1>{{ item.title}}</h1>
        </div>
        <div class="subtitle">
          <span class="line"></span>
          <div class="text">
            <router-link :to="{name:'tag',query:{id:item.tagId,name:item.tag}}" class="tag">#{{ item.tag }}</router-link>
            <span class="date">{{ item.date }}</span>
          </div>
          <span class="line"></span>
        </div>

        <router-link :to="{name:'detail',query:{id:item.commodityId,name:item.commodityTitle}}" class="larger">
          <img :src="item.commodityImg" alt="" />
          <div class="desc">
            <span class="title">{{ item.commodityTitle }}</span>
            <section class="price">
              <span><i>￥</i>{{item.commodityPrice}}</span>
            </section>
          </div>

        </router-link>


        <div class="tiny-body">
          <router-link :to="{name:'detail',query:{id:tiny.commodityId,name:tiny.commodityTitle}}" class="tiny" v-for="tiny in item.tinyList">
            <img :src="tiny.commodityImg" alt="" />
            <div class="desc">
              <span class="title">{{ tiny.commodityTitle }}</span>
              <section class="price">
                <span><i>￥</i>{{tiny.commodityPrice}}</span>
              </section>
            </div>
          </router-link>
        </div>

      </div>

      </div>
    </section>
    <p class="loadmore" v-show="loading"><span>正在努力加载中...</span></p>


  </div>
</template>

<script>

import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe'



export default {
  name: 'Gift',
  data () {
    return {

      loading: false,
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
        { id: 1, name: '表白浪漫'},
        { id: 1, name: '浪漫'},
        { id: 1, name: '表白'}],
        [{ id: 1, name: '浪漫浪漫'},
        { id: 1, name: '表白'},
        { id: 1, name: '浪漫浪漫'},
        { id: 1, name: '表白'},
        { id: 1, name: '浪漫浪漫'}]
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
            {
              commodityId: "3",
              commodityTitle: "唯美清新手工发箍",
              commodityPrice: "33",
              commodityImg: ''
            },
            {
              commodityId: "6",
              commodityTitle: "春暖花开生日蛋糕",
              commodityPrice: "218",
              commodityImg: ''
            },
            {
              commodityId: "7",
              commodityTitle: "春暖花开生日蛋糕2",
              commodityPrice: "300",
              commodityImg: ''
            }]
          },
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
              {
                commodityId: "3",
                commodityTitle: "唯美清新手工发箍",
                commodityPrice: "33",
                commodityImg: ''
              },
              {
                commodityId: "6",
                commodityTitle: "春暖花开生日蛋糕",
                commodityPrice: "218",
                commodityImg: ''
              },
              {
                commodityId: "7",
                commodityTitle: "春暖花开生日蛋糕2",
                commodityPrice: "300",
                commodityImg: ''
              }]
            },
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
                {
                  commodityId: "3",
                  commodityTitle: "唯美清新手工发箍",
                  commodityPrice: "33",
                  commodityImg: ''
                },
                {
                  commodityId: "6",
                  commodityTitle: "春暖花开生日蛋糕",
                  commodityPrice: "218",
                  commodityImg: ''
                },
                {
                  commodityId: "7",
                  commodityTitle: "春暖花开生日蛋糕2",
                  commodityPrice: "300",
                  commodityImg: ''
                }]
              }
      ]
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    loadMore () {
      this.loading = true
      console.log("start.....")
      setTimeout(() => {
        var data = {
          campaignId: 2,
          title: "第二期 浪漫礼物送给她，天天都过情人节",
          tag: "表白",
          tagId: "2",
          date: "2016-12-13 00:00:00",
          commodityId: "4",
          commodityImg: '',
          commodityTitle: "井口满天星花束",
          commodityPrice: "198",
          tinyList: [
            {
              commodityId: "3",
              commodityTitle: "唯美清新手工发箍",
              commodityPrice: "33",
              commodityImg: ''
            },
            {
              commodityId: "6",
              commodityTitle: "春暖花开生日蛋糕",
              commodityPrice: "218",
              commodityImg: ''
            },
            {
              commodityId: "7",
              commodityTitle: "春暖花开生日蛋糕2",
              commodityPrice: "300",
              commodityImg: ''
            }
          ]}
        this.issues.push(data)
        this.loading = false
        console.log("end.....")
      }, 1500)

    },
    handleCategory (item) {
      this.$router.push({ name:'category',query: item})
    }
  },
  mounted () {

  }

}
</script>

<style lang="less">
.gift {
  margin-bottom: 120px;
}
.gift-header {
  background-color: #ddb63f;
  height: 88px;
  text-align: center;
  color: #fff;
}
.gift-header > h1 {
  font-size: 36px;
  height: 88px;
  line-height: 88px;
}


.gift-category {
  background-color: white;
  height: 354px;
  font-size: 24px;
}
.gift-category .container {
  display: flex;
  flex-wrap: wrap;

}
.gift-category .item {
  flex-basis: 20%;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
}
.gift-category .item svg {
  width: 90px;
  height: 90px;
}


.gift-tag {
  background-color: white;
  margin-top: 20px;
  font-size: 24px;
  padding: 0 28px;
  height: 76px;

}
.gift-tag .container {
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.gift-tag .item {
  color: #ddb63f;
  font-size: 26px;
  font-weight: bold;
}
.gift-tag .item:not(:last-child) {
  margin-right: 30px;
}


.gift-issue {
  margin-top: 20px;
  background-color: white;
  padding: 10px 0;
  font-size: 24px;
  padding-top: 39px;
  text-align: center;
}
.gift-issue h1 {
  padding: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;

}
.gift-issue .issue-item {
  position: relative;
}
.gift-issue .subtitle {
  display: flex;
  align-items: center;
  color: #999;
  padding: 10px 40px;

}
.gift-issue .subtitle > * {
  flex-grow: 1;
}
.gift-issue .line {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 0;
  border: 1px solid #ddd;
}
.gift-issue .subtitle {
  font-weight: bold;
}
.gift-issue .subtitle .tag {
  color: #ddb63f;
  margin-right: 20px;
}

.gift-issue .larger {
  display: flex;
  padding: 10px 30px 10px;
  flex-direction: column;
  font-size: 26px;
}
.gift-issue .larger > img {
  height: 600px;
  background-color: #ddd;
  width: 100%;

}
.gift-issue .tiny > img {
 background-color: #ddd;
 height: 200px;
 width: 220px;
}
.gift-issue .larger .desc {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  align-items: center;
}
.gift-issue .larger .desc > .title, .gift-issue .tiny .desc > .title {
  font-weight: bold;
  line-height: 65px;
}
.gift-issue .price span, .gift-issue .price span {
  font-size: 32px;
  color: #ff6000;
  font-weight: bold;

}
.gift-issue .price span i, .gift-issue .price span i {
  font-size: 22px;
  font-weight: bold;
}

.gift-issue .tiny-body {
  display: flex;
  padding: 10px 0px 10px 30px;

}
.gift-issue .tiny {
  height: 340px;
  margin-right: 12px;
  width: 222px;
}
.gift-issue .tiny .desc {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  text-align: left;
}
.gift-issue .tiny .desc .title {
  text-overflow: ellipsis;
}
.gift-issue .larger .desc > .price, .gift-issue .tiny .desc > .price {
  color: red;
}

.loadmore {
  color: #999;
  text-align: center;
  line-height: 3;
  font-size: 26px;
}




</style>
