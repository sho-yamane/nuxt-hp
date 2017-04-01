<template>
  <div class="contact">
    <Header />
    <main class="main">
      <PageTitle v-bind:pageTitle="enTitle" v-bind:subTitle="jpTitle" />
      <ContactForm />
    </main>
    <Footer />
  </div>
</template>


<script>
import Logo from '~components/Logo.vue'
import Header from '~components/Header.vue'
import Footer from '~components/Footer.vue'
import PageTitle from '~components/PageTitle.vue'
import ContactForm from '~components/ContactForm.vue'

export default {
  data () {
    return {
      jpTitle: 'お問い合わせ',
      enTitle: 'Contact'
    }
  },
  components: {
    Logo,
    Header,
    Footer,
    PageTitle,
    ContactForm
  },
  head () {
    return {
      title: this.jpTitle,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
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
