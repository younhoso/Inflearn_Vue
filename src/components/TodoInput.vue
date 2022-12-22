<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>

    <span v-on:click="addTodo" class="addContainer">
      <i class="ic-plus addBtn"></i>
    </span>

    <Modal v-bind:propsopen="open"/>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data: function(){
    return {
      newTodoItem: '',
      open: false
    }
  },
  methods: {
    addTodo: function(){
      this.$emit('addTodoItme', this.newTodoItem);
      this.clearInput();
    },
    clearInput: function() {
      this.newTodoItem = ''
    },
  },
  components: {
    Modal: Modal
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
    display: flex;
  }

  .inputBox input {
    width: 100%;
    height: 100%;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    width: 4rem;
    background: linear-gradient(to right, #6478F8, #8763FB);
    display: block;
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