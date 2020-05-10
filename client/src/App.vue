<template>
  <div>
    <menulinks @movePage="movePage" v-if="page != 'login'"></menulinks>
    <index @movePage="movePage" @dataNews="dataNews" v-if="page == 'landing'"></index>
    <login @loggedIn="loggedIn" v-if="page == 'login'"></login>
    <newsItem v-if="page == 'newsItem'" :item="newsData"></newsItem>
    <search v-if="page == 'search'"></search>
  </div>
</template>

<script>
import login from './components/login'
import menulinks from './components/menu'
import index from './components/index'
import newsItem from './components/newsitem'
import search from './components/search'

export default {
  name : `App`,
  components : {
    login,
    menulinks,
    index,
    newsItem,
    search
  },
  data() {
    return {
      page : `login`,
      newsData : {}
    };
  },
  methods : {
    loggedIn () {
      this.page = `landing`
    },
    movePage(page) {
      if(page==`login`){
        localStorage.clear();
      }
      this.page = page;
    },
    dataNews(item) {
      this.newsData = item
    }
  },
  created : function(){
    if(localStorage.getItem(`access_token`)){
      this.page = `landing`
    }
  }
};
</script>

<style scoped>
</style>

