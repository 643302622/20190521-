<template>
  <header class="headerBox">
    <div class="headerSearch">
      <img class="titleText" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选"/>
      <div class="searchBox">
        <img class="search" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="搜索按钮图片"/>
        <span class="placeholder">搜索商品，共21726件好物</span>
      </div>
      <span class="loginBtn">登录</span>
    </div>
    <div class="headerNavBar wrap_countent">
      <div class="leftBox wrapper" ref="wrap">
        <ul class="leftUrl clear wrp_content" ref="tab">
          <li><a class="red" href="javascript:;">推荐</a></li>
          <li><a href="javascript:;">居家生活</a></li>
          <li><a href="javascript:;">服饰鞋包</a></li>
          <li><a href="javascript:;">美食酒水</a></li>
          <li><a href="javascript:;">个户清洁</a></li>
          <li><a href="javascript:;">母婴亲子</a></li>
          <li><a href="javascript:;">运动旅行</a></li>
          <li><a href="javascript:;">数码家电</a></li>
          <li><a href="javascript:;">礼品特色</a></li>
        </ul>
      </div>
      <div class="rightSpan">
        <span class="blank" ></span>
        <i @click="showCont()"  class="iconfont rightImg" :class="{'icondown1':show ,'iconup':!show}" ></i>
      </div>
      <div class="allNavBar"  v-if="show">
        <p>全部频道</p>
        <ul class="cover">
          <li class="click"><a class="click" href="javascript:;">推荐</a></li>
          <li><a href="javascript:;">居家生活</a></li>
          <li><a href="javascript:;">服饰鞋包</a></li>
          <li><a href="javascript:;">美食酒水</a></li>
          <li><a href="javascript:;">个户清洁</a></li>
          <li><a href="javascript:;">母婴亲子</a></li>
          <li><a href="javascript:;">运动旅行</a></li>
          <li><a href="javascript:;">数码家电</a></li>
          <li><a href="javascript:;">礼品特色</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    name: "vue",
    data(){
      return {
        show:false
      }
    },
    methods:{
      showCont(){
        this.show=!this.show
      },
      personScroll() {
        // 默认有六个li子元素，每个子元素的宽度为120px
        let width = 9 * 90;
        this.$refs.tab.style.width = width + "px";
        // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrap, {
              startX: 0,
              click: true,
              scrollX: true,
              // 忽略竖直方向的滚动
              scrollY: false,
              eventPassthrough: "vertical"
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
    },
    created() {
      this.$nextTick(() => {
        this.personScroll()
      })
    },
    mounted(){
      new BScroll('.wrapper')
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .headerBox
    /*background goldenrod*/
    height 73px
    width 375px
    .headerSearch
      margin-left 20px
      width 98%
      height 36px
      /*background red*/
      .search
        height 14px
        width 14px
        /*background blue*/
        vertical-align text-bottom
        margin-top 8px
        margin-left 20px
      .placeholder
        font-size 14px
        color gray
      .titleText
        float left
        height 20px
        width 60px
        margin 10px 0
      .searchBox
        float left
        width 221px
        height 28px
        margin 5px 5px
        padding-right px
        border-radius 2px
        background #e2e2e2
      .loginBtn
        float right
        /*background yellow*/
        margin 7px 7px 7px 2px
        text-align center
        color #d30000
        border-radius 2px
        border 1px solid #d30000
        height 22px
        line-height 22px
        width 39px


  .headerNavBar
    position relative
    top 0px
    left 0px
    height 38px
    background white
    width 100%
    .leftBox
      width 375px
      /*background blue*/
      height 33px
      float left
      margin-left 12px
      overflow hidden
      .leftUrl
        width 1000px
        /*background yellow*/
        /*overflow hidden*/
        padding-left 10px
        height 28px
        line-height 28px
        &.clear
          content ''
          display block
        li
          float left
          margin 0 5px
          a
            display inline-block
            height 28px
            padding 0 6px
            font-size 14px
            color black
            &.red
              border-bottom 3px solid red
              color red
    .rightSpan
      position absolute
      top 0px
      right -8px
      width 53px
      height 30px
      z-index 99
      .blank
        display inline-block
        background white
        padding 15px 26px
      .rightImg
        position absolute
        left 50%
        top 50%
        margin-left -7px
        margin-top -5px
        width 14px
        height 14px
    .allNavBar
      position absolute
      top 0px
      left 0px
      height 149px
      /*background blue*/
      width 375px
      z-index 98
      p
        background white
        height 30px
        line-height 30px
        padding-left 15px
        font-size 14px
        width 360px
      .cover
        width 360px
        background white
        padding-left 15px
        height 119px
        z-index 1000
        li
          margin 2px 3px
          width 82px
          height 32px
          line-height 32px
          border-radius 5px
          text-align center
          font-size 14px
          background rgba(237, 237, 237, 0.35)
          border 1px solid #e8e8e8
          float left
          &.click
            color red
            border 1px solid red
          a
            color black
            &.click
              color red




</style>
