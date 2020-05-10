<template>
<div>
    <div class="container mt-5 ">
        <div class="title" style="text-decoration : none; color: black;">
            <div class="card-header card-header-primary text-center">
                <h4 class="card-title">{{item.title}}</h4>
            </div>
            <p class="description text-center">Author : {{item.author}} </p>
            <img class="col-sm-12" :src="item.urlToImage" width="auto">
            <div class="card-body p-4" style="text-decoration : none; color: black;">
                <p> {{ item.description }} </p>
            </div>
            <div class="footer text-left p-4">
                source : {{ item.source.name }}
            </div>
        </div>
    </div>
    <hr>
</div>
</template>

<script>
export default {
    name : `searchresult`,
    props : [`item`],
    methods : {
        detailNews(item){
            this.$emit(`movePage`, 'newsItem')
            this.$emit(`dataNews`, item)
        }
    }
}
</script>

<style>

</style>