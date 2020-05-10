<template>
<div class="main main-raised mt-3"> 
    <div class="section section-basic" style="padding : 0;" v-for="item in bulkNews" :key="item.title">
        <a :href="'#'+item.title" @click="detailNews(item)">
        <div class="container mt-5 ">
            <div class="title">
                <div class="card-header card-header-primary text-center">
                    <h4 class="card-title">{{item.title}}</h4>
                </div>
                <p class="description text-center">Author : {{item.author}} </p>
                <img class="col-sm-12" :src="item.urlToImage" width="auto">
                <div class="card-body p-4" style="text-decoration : none;">
                    <p> {{ item.description }} </p>
                </div>
                <div class="footer text-left p-4">
                    source : {{ item.source.name }}
                </div>
            </div>
        </div>
        </a>
        <hr>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            bulkNews : [],
        }
    },
    created : function () {
        axios({
            method : `get`,
            url : `https://newsapi.org/v2/top-headlines?country=id&apiKey=e992f7e5380b4e6aa5a85b8b8830233f`
        })  .then(result => {
            this.bulkNews = result.data.articles
        })
    },
    methods : {
        detailNews(item){
            console.log(item)
            this.$emit(`movePage`, 'newsItem')
            this.$emit(`dataNews`, item)
        }
    }
}
</script>

<style>

</style>