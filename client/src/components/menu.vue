<template>
  <nav>
    <a href="#" @click="movePage('landing')">Index</a>
    <a href="#" @click="movePage('search')">Search</a>
    <a href="#" @click="movePage('login')">Logout</a>
  </nav>
</template>

<script>
export default {
    name : 'links ',
    data() {
        return {
          dr : ` `
        }
    },
    methods : {
      movePage(page) {
        this.$emit('movePage', page)
      }
    }
}
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 111;
  background-color: rgba(245, 245, 245, 0.9);
}
nav a {
  flex-grow: 1;
  padding-top: 35px;
  height: 100px;
  align-items: center;
}
nav a:hover {
  color: white;
  background-color: rgba(156, 39, 176, 1)
}
</style>