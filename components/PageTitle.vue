<template>
  <div class="page-title-wrap">
    <div class="vertical-wrap">
      <h1>{{pageTitle}}</h1>
      <div class="page-title-des">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['pageTitle', 'subTitle']
  }
</script>

<style lang="scss" scoped>
.page-title-wrap {
  height: 300px;
  display: table;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  .vertical-wrap {
    display: table-cell;
    vertical-align: middle;
    h1 {
      font-size: 32px;
      text-align: center;
      margin: 0 0 0px;
      line-height: 1.3;
      color: #35495e;
    }
    .page-title-des {
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
