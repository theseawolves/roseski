<template lang="html">
<div class="category">
  <header class="category-header">
    <div class="category-header-left" @click="handleBack">
      <svg class="icon" aria-hidden="true">
        <use  xlink:href='#icon-fanhui'></use>
      </svg>
    </div>
    <h1  class="category-header-center">{{this.$route.query.name}}</h1>
    <div class="">
    </div>
  </header>
  <div class="filter-header">
    <a href="#" class="filter-nav"
     :class="{'active': showCategory}"
     @click.stop.prevent="showCategory = !showCategory, showSort = false,isModalClick=false">
      <span>{{categorySelected}}</span>
      <svg class="icon" aria-hidden="true">
        <use v-if="showCategory"  xlink:href='#icon-xialaxuanxiang'></use>
        <use v-else xlink:href='#icon-xuanxiang'></use>
      </svg>
    </a>
    <a href="#" class="filter-nav"
     :class="{'active': showSort}"
     @click.stop.prevent="showSort =!showSort,showCategory=false,isModalClick=false">
      <span>{{sortSelected}}</span>
      <svg class="icon" aria-hidden="true">
        <use v-if="showSort" xlink:href='#icon-xialaxuanxiang'></use>
        <use v-else xlink:href='#icon-xuanxiang'></use>
      </svg>
    </a>
  </div>
  <section class="filter-extend filter-category" :class="{'open': showCategory}">
    <ul>
      <li v-for="item in filterCategory"
      :class="{'active':categorySelected == item.name}"
      @click.stop="handleCategory(item.name)">
        <span>{{item.name}}</span>
        <span class="count">{{item.count}}</span>
      </li>
    </ul>
  </section>
  <section class="filter-extend filter-sort" :class="{'open': showSort}">
    <ul>
      <li v-for="item in filterSort"
      :class="{'active':sortSelected == item}"
      @click.stop="handleSort(item)">
        <span>{{item}}</span>
        <svg class="icon" aria-hidden="true">
          <use v-if="showSort && sortSelected == item" xlink:href='#icon-xihuan'></use>
        </svg>
      </li>
    </ul>
  </section>
  <section class="filter-modal"
  :class="{'open': showCategory || showSort}"
  @click="handleModal">
  </section>

  <section
    class="category-list"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="60">

    <section class="category-container" v-for="category in categories">
      <section class="img-container">
        <img :src="category.image" alt="" />
      </section>
      <section class="main-container">
        <section class="main-line">
          <h3>{{category.name}}</h3>
        </section>
        <section class="main-line">
          <div class="">
            <span>{{category.campaignName}}</span>
          </div>
        </section>
        <section class="main-line">
          <a href="#" class="tag">#{{category.tagName}}</a>
        </section>
        <section class="main-line">
          <div class="">
            <strong><span>￥</span>{{category.price}}</strong>
            <del>￥100</del>
          </div>
        </section>
      </section>
    </section>

  </section>
  <p class="loadmore" v-show="loading"><span>正在努力加载中...</span></p>

</div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      loading: false,
      categories: [
        {
          id: "6",
          name: "春暖花开生日蛋糕",
          price: "218",
          image: '',
          campaignId: "2",
          campaignName: "第二期 浪漫礼物送给她，天天都过情人节",
          tagId: "2",
          tagName: "表白"
        },
        {
          id: "4",
          name: "井口满天星花束",
          price: "198",
          image: '',
          campaignId: "2",
          campaignName: "第二期 浪漫礼物送给她，天天都过情人节",
          tagId: "2",
          tagName: "表白"
        }
      ],
      categorySelected: '全部分类',
      sortSelected: '按热度排序',
      showCategory: false,
      showSort: false,
      isModalClick: false,
      filterCategory: [
        { name: '全部分类', count: 100},
        { name: '玫瑰花', count: 100},
        { name: '永生花', count: 100},
        { name: '薰衣草', count: 100},
        { name: '满天星', count: 100},
        { name: '郁金香', count: 100},
        { name: '蔷薇', count: 100}

      ],
      filterSort: ['按热度排序', '按上架先后排序', '按价格高至低排序', '按价格低至高排序']

    }
  },
  methods: {
    handleBack () {
      this.$router.push({path:'/'})
    },
    handleCategory (item) {
      this.categorySelected = item
      this.handleModal()

    },
    handleSort (item){
      this.sortSelected = item
      this.handleModal()
    },
    handleModal () {
      this.showCategory = false
      this.showSort = false
    },
    loadMore () {
      this.loading = true
      console.log("start.....")
      setTimeout(() => {
        var data = {
          id: "4",
          name: "井口满天星花束",
          price: "198",
          image: null,
          campaignId: "2",
          campaignName: "第二期 浪漫礼物送给她，天天都过情人节",
          tagId: "2",
          tagName: "表白"
        }
        this.categories.push(data)
        this.loading = false
        console.log("end.....")
      }, 1500)

    }

  }
}
</script>

<style lang="css" scoped>
.category {
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-bottom: 120px;
}
.category-header {
  height: 88px;
  background-color: #ddb63f;
  display: flex;
  align-items: center;
  color: white;
}

.category-header .category-header-left {
  padding-left: 23px;
}
.category-header > * {
  flex: 1;
}
.category-header svg {
  width: 44px;
  height: 44px;
  fill: white;

}
.category-header .category-header-center {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.filter-header {
  height: 78px;
  background-color: white;
  display: flex;
  font-size: 26px;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #ddd;
  position: relative;
  z-index: 3;
}
.filter-header .filter-nav {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  border-right: 1px solid #ddd;
  justify-content: center;
}

.filter-header svg {
  width: 22px;
  height: 22px;
  fill: #ddd;

}
.filter-extend.filter-category, .filter-extend.filter-sort {
  position: absolute;
  left: 0;
  right: 0;
  top: 166px;
  width: 100%;
  background-color: white;
  z-index: 3;
  opacity: 0;
  visibility: hidden;
}
.filter-extend.filter-category.open, .filter-extend.filter-sort.open {
  opacity: 1;
  visibility: visible;
}
.filter-extend li {
  height: 100px;
  border-top: 1px solid #ddd;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 23px;
}
.filter-extend li svg {
  width: 30px;
  height: 30px;
  fill: #3190e8;
}
.filter-header .filter-nav.active, .filter-extend li.active {
  color: #3190e8;
}
.filter-modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.2);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
}
.filter-modal.open {
  opacity: 1;
  visibility: visible;
}
.loadmore {
  color: #999;
  text-align: center;
  line-height: 3;
  font-size: 26px;
}
.category-list {
  background-color: white;
}
.category-container {
  display: flex;
}
.img-container {
  width: 240px;
  height: 238px;
  padding: 30px 20px;
  background-color: #ddd;
  background-clip: content-box;
}
.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
}
.main-line a {
  color: #ddb63f;
  font-size: 22px;
}
.main-line h3 {
  font-size: 30px;
}
.main-line span {
  color: #666;
  font-size: 22px;
}
.main-line  strong {
  font-size: 32px;
  color: #f60;
}
.main-line  strong > span {
  font-size: 22px;
  color: #f60;
}

</style>
