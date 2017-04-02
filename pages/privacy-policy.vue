<template>
  <div class="contact">
    <main class="main">
      <PageTitle v-bind:pageTitle="enTitle" v-bind:subTitle="jpTitle" />
      <div class="container-wrap">
        <div class="container-row">
          <p>株式会社 xxx（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>
          <p><b>個人情報の管理</b></p>
          <p>当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
          <p><b>個人情報の利用目的</b></p>
          <p>お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
          <p><b>個人情報の第三者への開示・提供の禁止</b></p>
          <p>当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
          <ul>
            <li>お客さまの同意がある場合</li>
            <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
            <li>法令に基づき開示することが必要である場合</li>
          </ul>
          <p><b>個人情報の安全対策</b></p>
          <p>当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
          <p><b>ご本人の照会</b></p>
          <p>お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>
          <p><b>法令、規範の遵守と見直し</b></p>
          <p>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
          <p><b>お問い合せ</b></p>
          <p>当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br>
          株式会社 xxx<br>
          〒xxx-xxxx　xx県xx市xx町x-x-x<br>
          TEL:XXX-XXX-XXXX FAX:XXX-XXX-XXXX<br>
          Mail:info@example.co.jp</p>
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
      jpTitle: 'プライバシーポリシー',
      enTitle: 'Privacy Policy'
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
p {
  margin: 0 0 20px;
}
ul {
  margin-bottom: 20px;
  li {

  }
}
</style>
