<template>
  <div class="container-wrap">
    <div class="container-row">
      <div class="form-wrap">
        <el-form ref="form" :model="form" label-width="120px" label-position="top" >
          <el-form-item label="お名前">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="件名">
            <el-select v-model="form.region" placeholder="選択して下さい。">
              <el-option label="Zone one" value="お仕事の依頼"></el-option>
              <el-option label="Zone one" value="その他依頼"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="ご連絡可能時間">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="日にちを選択" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="時間を選択" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="電話OK？">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="依頼種別">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="WordPress構築" name="type"></el-checkbox>
              <el-checkbox label="React.js構築" name="type"></el-checkbox>
              <el-checkbox label="Vue.js構築" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="規約に同意">
            <el-radio-group v-model="form.resource">
              <el-radio label="はい"></el-radio>
              <el-radio label="いいえ"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="問い合わせ概要">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
.form-wrap {
  width: 700px;
  margin: 0 auto;
}
</style>
