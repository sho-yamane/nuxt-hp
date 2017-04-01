<template>
  <div class="container-wrap">
    <div class="container-row">
      <h2 class="container-title">サービス</h2>
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="grid-content">
            <div class="service-content">
              <div class="title">
                <el-tooltip placement="top">
                  <div slot="content">◯◯万円ぐらい</div>
                  <h3>WordPressサイト構築</h3>
                </el-tooltip>
              </div>
              <div class="des">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div class="btn">
                <el-button @click="dialogTableVisible = true" type="primary">詳しく見る</el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="service-content">
              <div class="title">
                <el-tooltip placement="top">
                  <div slot="content">◯◯万円ぐらい</div>
                  <h3>Vue.jsサイト構築</h3>
                </el-tooltip>
              </div>
              <div class="des">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div class="btn">
                <el-button @click="dialogTableVisible = true" type="primary">詳しく見る</el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="service-content">
              <div class="title">
                <el-tooltip placement="top">
                  <div slot="content">◯◯万円ぐらい</div>
                  <h3>React.jsサイト構築</h3>
                </el-tooltip>
              </div>
              <div class="des">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div class="btn">
                <el-button @click="dialogTableVisible = true" type="primary">詳しく見る</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="サービス料金表" v-model="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="name" label="サービス名" width="200"></el-table-column>
        <el-table-column property="price" label="料金" width="200"></el-table-column>
        <el-table-column property="deliveryDate" label="納期"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogTableVisible: false,
      gridData: [
        {
          name: 'WordPressサイト作成',
          price: '◯◯万円~',
          deliveryDate: '1ヶ月'
        }, {
          name: 'Vue.jsサイト構築',
          price: '◯◯万円~',
          deliveryDate: '1ヶ月'
        }, {
          name: 'React.jsサイト構築',
          price: '◯◯万円~',
          deliveryDate: '1ヶ月'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h2.container-title {
  text-align: center;
  margin: 0 0 30px;
  color: #35495e;
  &:after {
    width: 30px;
    height: 1px;
    background: #35495e;
    display: block;
    margin: 15px auto 0;
    content: '';
  }
}
.service-content {
  .title {
    h3 {
      font-size: 21px;
      margin: 0 0 15px;
      text-align: center;
    }
  }
  .des {
    margin: 0 0 15px;
  }
  .btn {
    margin: 0;
    text-align: center;
  }
}
</style>
