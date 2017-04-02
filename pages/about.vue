<template>
  <div class="contact">
    <main class="main">
      <PageTitle v-bind:pageTitle="enTitle" v-bind:subTitle="jpTitle" />
      <div class="container-wrap">
        <div class="container-row">
          <p>このHPはVue.js、Nuxt.js、Elementで構築されたサンプルサイトです。</p>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import PageTitle from '~components/PageTitle.vue'

export default {
  data () {
    return {
      jpTitle: 'このページについて',
      enTitle: 'About'
    }
  },
  components: {
    PageTitle
  },
  head () {
    return {
      title: this.jpTitle,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
