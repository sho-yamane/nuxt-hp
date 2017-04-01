<template>
  <div class="container-wrap">
    <div class="container-row">
      <h2 class="container-title">ブログ</h2>
      <div class="archives">
        <div class="archive" v-for="(post, index) in posts" :key="post.id" v-if="index < 6" >
          <a :href="post.link" target="_blank">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['medium'].source_url" class="image">
              <div style="padding: 14px;">
                <time class="time">{{dateFormat(post.date)}}</time>
                <h3>{{post.title.rendered}}</h3>
              </div>
            </el-card>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: [],
      loading: true
    }
  },
  created: function () {
    this.getPosts()
  },
  methods: {
    getPosts: function () {
      var app = this
      axios.get('https://www.sho-yamane.me/wp-json/wp/v2/posts?_embed&filter[posts_per_page]=1')
      .then(function (response) {
        app.posts = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    dateFormat: function (date) {
      var dateSplit = date.split('-')
      var y = dateSplit[0]
      var m = parseInt(dateSplit[1], 10)
      var ds = dateSplit[2].split('T')
      var d = ds[0]
      return y + '.' + m + '.' + d
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

.archives {
  display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  .archive {
    margin-bottom: 30px;
    width: 30%;
    border: 1px solid #eaeaea;
    a {
      color: #333;
      text-decoration: none;
    }
    .el-card {
      border: none;
      box-shadow: none;
      .el-card__body {
        img {
          width: 100%;
          height: auto;
        }
        div {
          h3 {
            line-height: 1.5;
            font-size: 16px;
          }
        }
      }
    }
  }
}



</style>
