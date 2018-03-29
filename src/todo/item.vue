<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    />
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo">×</button>
  </div>
</template>

<script>
// todo.completed
export default {
  props: {
    todo: {
      type: Object,
      required: true //必须要传入的否则没有意义了
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style scoped>

</style>
