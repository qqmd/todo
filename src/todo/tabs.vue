<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}}items left</span>
    <span class="items">
      <span v-for="state in states" 
      :key="state" 
      :class="[state, filter === state ? 'actived' : '']"
      @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span></span>
    <span class="clear" @click="clearAllCompleted">清空所有</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: ["all", "active", "completed"]
    }
  },
  props: {
    filter: {
      type: String,
      required: true
    },
    todos:{
      type: Array,
      required: true
    }
  },
  computed:{
    unFinishedTodoLength() {
      return this.todos.filter(todo=> !todo.completed).length
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit('toggle', state)
    },
    clearAllCompleted(){
      this.$emit('clearAllCompleted')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
