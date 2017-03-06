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
</div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
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
    }
  }
}
</script>

<style lang="css" scoped>
.category {
  position: sticky;
  top: 0;
  z-index: 1000;
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
  top: 100%;
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
  border-bottom: 1px solid #ddd;
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
</style>
