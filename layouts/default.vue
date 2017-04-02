<template>
  <div id="page">
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Header from '~components/Header.vue'
import Footer from '~components/Footer.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style src="element-ui/lib/theme-default/index.css"></style>
<style lang="scss">
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
.container-wrap {
  width: 1140px;
  padding: 0 30px;
  margin: 0 auto;
  .container-row {
    padding: 60px 0;
  }
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: all .4s ease-in-out;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all .4s ease-in-out;
}

.slide-right-enter, .slide-right-leave-to /* .fade-leave-active in <2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}

</style>
