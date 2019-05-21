<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/homePage'}" @click="goTo('/homePage')">
      <span class="item_icon">
        <i class="iconfont iconhome"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/classification'}" @click="goTo('/classification')">
      <span class="item_icon">
        <i class="iconfont iconclassify"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/generalThings'}" @click="goTo('/generalThings')">
      <span class="item_icon">
        <i class="iconfont icongeneral95"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shoppingCart'}" @click="goTo('/shoppingCart')">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/personal'}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icongeren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "FootGuide",
    methods:{
      goTo(path){
        this.$router.replace(path)

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  /*.footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px*/
  .footer_guide
    position fixed
    left 0
    right 0
    bottom 0
    height 50px
    width 750px
    display flex
    .guide_item
      display flex
      width 75px
      height 50px
      flex-direction column
      align-items center
      text-align center
      &.on
        color red
      span
        margin-top 2px
        .iconfont
          font-size 22px
          margin-bottom 2px
          margin-top 2px
</style>
