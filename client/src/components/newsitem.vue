<template>
    <div class="page-header" style="padding-top: 25px">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-6 ml-auto mr-auto">
                    <div class="card card-login">

                        <div class="card-header card-header-primary text-center">
                            <h4 class="card-title">{{ item.title }}</h4>
                        </div>
                        <p class="description text-center">Author : {{ item.author }}</p>
                        <img class="col-sm-12" :src="item.urlToImage" width="auto">
                        <div class="card-body p-4">
                            <p>{{ item.content }}</p>
                        </div>
                        <div class="footer text-left p-4">
                            source : {{item.source.name}}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : [`item`]
}
</script>

<style>

</style>