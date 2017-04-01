<template>
  <div class="index">
    <Header />
    <main class="main">
      <Slider />
      <Service />
      <Archives />
    </main>
    <Footer />
  </div>
</template>


<script>
import Logo from '~components/Logo.vue'
import Header from '~components/Header.vue'
import Slider from '~components/Slider.vue'
import Service from '~components/Service.vue'
import Footer from '~components/Footer.vue'
import Archives from '~components/Archives.vue'

export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    Logo,
    Header,
    Slider,
    Service,
    Footer,
    Archives
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
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
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
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
