<template>
  <div class="real-app">
    <input type="text" 
      placeholder="接下来要做什么？"
      class="todo"
      @keyup.enter="addTodo"
    />
    <Item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteTodo"/>
    <Tabs 
      :filter="filter" 
      :todos="todos" 
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    />
  </div>
  
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id=0;
export default {
  components: {
    Item,
    Tabs
  },
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  computed: {
    filteredTodos() {
      if(this.filter === 'all'){
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter( todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value=''
    },
    deleteTodo() {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
    },
    toggleFilter(state) {
      this.filter = state
    },
    clearAllCompleted() {
      this.todos = this.todos.filter( todo => !todo.completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app
  width:600px
  margin:0 auto
</style>
