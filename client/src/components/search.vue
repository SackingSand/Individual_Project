<template>
    <div class="page-header" style="padding-top: 25px">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-6 ml-auto mr-auto">
                    <div class="card card-login">

                        <div class="card-header card-header-primary text-center">
                            <h4 class="card-title">
                                <form @submit.prevent="doSearch">
                                    <div class="col-lg-12 col-sm-12" style="align-items: center">
                                        <div class="form-group">
                                            <input v-model="q" type="text" class="form-control" placeholder="query">
                                            <input type="submit" class="btn btn-info" value="Search">
                                            <span class="bmd-help">We'll never share your email with anyone else.</span>
                                        </div>
                                    </div>
                                </form>
                            </h4>
                        </div>

                        <searchResult v-if="searchItem" class="section section-basic" style="padding : 0;" v-for="item in searchItem" :item="item" :key="item.title"></searchResult>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import searchResult from './searchresult'
import axios from 'axios'

export default {
    name : `search`,
    props : [`item`],
    components : {
        searchResult
    },
    data() {
        return {
            searchItem  : [],
            q : ``
        }
    },
    methods : {
        doSearch() {
            axios({
                method : `get`,
                url : `http://newsapi.org/v2/top-headlines?country=id&apiKey=e992f7e5380b4e6aa5a85b8b8830233f&q=${encodeURI(this.q)}&sortBy=relevancy`
            })  .then( result => {
                console.log(result.data.articles)   
                this.searchItem = result.data.articles
            })
        }
    }
}
</script>

<style>

</style>