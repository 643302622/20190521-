<template>
  <div id="header">
    <div class="content">
      <div class="top">
        <span class="neImg"></span>
        <div class="search">
          <i class="iconfont icon-search"></i>
          <span>搜索商品,共200000款好物</span>
        </div>
        <span class="login">登录</span>
      </div>
      <div class="wrap_countent" >
        <div class="wrapper" ref="wrap">
          <ul class="wrp_content" ref="tab" v-show="down">
            <li  border-1px>
              推荐
            </li>
            <li>
              居家生活
            </li>
            <li>
              服饰鞋包
            </li>
            <li>
              美食酒水
            </li>
            <li>
              个户清洁
            </li>
            <li>
              母婴亲子
            </li>
            <li>
              运动旅行
            </li>
            <li>
              数码家电
            </li>
            <li>
              全球特色
            </li>
          </ul>
          <p class="wrp_span" v-show="!down">全部频道</p>
        </div>
        <div class="wrp_right">
          <div class="blank"></div>
          <div class="down" @click="down=!down">
            <i class="iconfont" :class="{'icon-xiangshang' : down,'icon-een':!down}" ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="channel" v-show="!down">
      <ul class="mask">
        <li class="active">
          推荐
        </li>
        <li>
          居家生活
        </li>
        <li>
          服饰鞋包
        </li>
        <li>
          美食酒水
        </li>
        <li>
          个户清洁
        </li>
        <li>
          母婴亲子
        </li>
        <li>
          运动旅行
        </li>
        <li>
          数码家电
        </li>
        <li>
          全球特色
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: "headerNetease",
    data(){
      return{
        down:true
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
    methods:{
      personScroll() {
        // 默认有六个li子元素，每个子元素的宽度为120px
        let width = 9 * 120;
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
      },
      changeUp(e){
        console.log(e);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../commen/stylus/mixins.styl"
  #header
    .content
      height 148px
      width 750px
      .top
        display flex
        height 60px
        width 690px
        padding 15px 30px
        .neImg
          display inline-block
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
          background-size 138px 40px
          background-repeat no-repeat
          width 138px
          height 40px
        .search
          height 56px
          width 443px
          border-radius 10px
          background-color #eee
          margin-left 20px
          text-align center
          line-height 56px
          i
            vertical-align middle
            font-size 38px
          span
            color #666
        .login
          width 75px
          height 40px
          border 2px solid red
          border-radius 6px
          color red
          text-align center
          line-height 40px
          margin-left 16px
          margin-top 5px
      .wrap_countent
        height 60px
        width 750px
        display flex
        .wrapper
          width 651px
          height 60px
          overflow hidden
          .wrp_content
            display flex
            margin-left 10px
            li
              text-align center
              height 60px
              line-height 60px
              white-space nowrap
              margin-left 42px
              font-size 26px
              &:first-child
                margin-left 30px
                bottom-border-1px(#FF0000)
          .wrp_span
            height 60px
            line-height 60px
            vertical-align middle
            margin-left 16px
            font-size 28px
            color black
        .wrp_right
          width 160px
          height 60px
          display flex
          .blank
            height 60px
            width 60px
            background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
          .down
            height 60px
            width 99px
            text-align center
            line-height 60px
            i
              font-size 26px
    .channel
      width 750px
      height 312px
      position absolute
      z-index 3
      background-color #fff
      .mask
        display flex
        flex-wrap wrap
        li
          text-align center
          line-height 56px
          font-size 24px
          width 150px
          height 56px
          border 1px solid #7e8c8d
          border-radius 8px
          margin-left 20px
          margin-bottom 30px
          margin-top 10px
          background-color #eee
          &.active
            border 1px solid red
            background-color #fff
</style>
