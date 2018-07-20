<template>
  <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe667;</div>
      </div>
      <div class="header-input">
        <span class="iconfont search">&#xe6ac;</span>
        输入景点/城市/主题
      </div>
      <router-link to="/city"> 
        <div class="header-right">
          {{this.city}}
          <span class="iconfont select">&#xe64a;</span>
        </div>
      </router-link>  
  </div>
</template>

<script>
export default {
  name: 'home-header',
  props:{
    city: String
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    background: $bgColor
    height: $headerHeight
    line-height: $headerHeight
    color: #fff
    a
      color: #fff
    .header-input
      flex: 1
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      border-radius: .1rem
      background: #fff
      color: #ccc
      padding-left: .2rem
    .header-left
      width: .64rem
      float: left
      text-align: center
      .back-icon
        font-size: .4rem
        text-align: center
    .header-right
      width:1.24rem
      float: right  
      text-align: center  
      .select
        font-size: .2rem
</style>
