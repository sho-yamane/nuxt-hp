<template>
  <header class="main-header">
    <div class="container-wrap">
      <el-row>
        <el-col :span="24">
          <h1 class="logo">
            <a href="/">ShoYamane.me</a>
          </h1>
          <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><nuxt-link to="/about">このサイトについて</nuxt-link></el-menu-item>
            <el-submenu index="2">
              <template slot="title"><nuxt-link to="/works">事業概要</nuxt-link></template>
              <el-menu-item index="2-1">サービス</el-menu-item>
              <el-menu-item index="2-2">事例</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.sho-yamane.me">ブログ</a></el-menu-item>
            <el-menu-item index="4"><nuxt-link to="/contact">お問い合わせ</nuxt-link></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '0',
      activeIndex2: '0'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
header.main-header {
  height: 60px;
  background-color: #324157;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 60px;
  z-index: 100;
  position: relative;
  .container-wrap {
    width: 1140px;
    padding: 0 30px;
    margin: 0 auto;
    .logo {
      margin: 0;
      float: left;
      font-size: 24px;
      font-weight: 400;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
    ul {
      float: right;
      height: 100%;
      line-height: 60px;
      padding: 0;
      margin: 0;
      li {
        a {
          color: #bfcbd9;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
