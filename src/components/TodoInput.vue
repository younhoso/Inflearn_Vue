<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>

    <span v-on:click="addTodo" class="addContainer">
      <i class="ic-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      newTodoItem: ''
    }
  },
  methods: {
    save: function() {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
    },
    clearInput: function() {
      this.newTodoItem = ''
    },
    addTodo: function(){
      this.save();
      this.clearInput();
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478F8, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
    font-size: 22px;
    font-weight: 800;
  }
</style>