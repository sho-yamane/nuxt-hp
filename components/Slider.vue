<template>
  <el-carousel indicator-position="outside" height="450px" :autoplay="false">
    <el-carousel-item v-for="detail in details" :key="detail.id">
      <h3>{{ detail.mes }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      details: [
        {'mes': '京都在住のWebデザイナーです'},
        {'mes': 'このHPはVue.jsで作られているサンプルページです'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel {
  .el-carousel__container {
    .el-carousel__item {
      &:before {
        content: '';
        background: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
        position: absolute;
      }
      h3 {
        color: #fff;
        font-size: 18px;
        opacity: 0.75;
        line-height: 450px;
        margin: 0;
        text-align: center;
      }
      &:nth-of-type(1) {
        /*background-image: url("~assets/images/1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;*/
      }
      &:nth-of-type(2) {
        /*background-image: url("~assets/images/2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;*/
      }
    }
  }
}

</style>
