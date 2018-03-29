<template>
  <div id="app">
    <div id="cover">
    </div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './todo/header.vue'
import Todo from './todo/todo.vue'
import Tabs from './todo/tabs.vue'
import Footer from './todo/footer.jsx'
export default {
  components: {
    Header,
    Footer,
    Todo
  },
  data() {
    return {
      test: '这是网站'
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>

