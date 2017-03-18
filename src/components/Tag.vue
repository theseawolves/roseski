<template lang="html">
  <div class="tag">
    <header class="tag-header">
      <div class="tag-header-left" @click="handleBack">
        <svg class="icon" aria-hidden="true">
          <use  xlink:href='#icon-fanhui'></use>
        </svg>
      </div>
      <h1  class="tag-header-center">{{this.$route.query.name}}</h1>
      <div class="">
      </div>
    </header>

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
            <a href="#" class="tag">#{{ item.tag }}</a>
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
export default {
  name: 'Tag',
  data () {
    return {
      loading: false,
      issues: []

    }
  },
  methods: {
    handleBack () {
      this.$router.push({path:'/'})
    },
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
  }
}
</script>

<style lang="css" scoped>
.tag {
  margin-bottom: 120px;
}
.tag-header {
  height: 88px;
  background-color: #ddb63f;
  display: flex;
  align-items: center;
  color: white;
}

.tag-header .tag-header-left {
  padding-left: 23px;
}
.tag-header > * {
  flex: 1;
}
.tag-header svg {
  width: 44px;
  height: 44px;
  fill: white;

}
.tag-header .tag-header-center {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
