<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addTodoItme="addItem"/>
    <TodoList v-bind:propsdata="todoItems" />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data: function (){
    return {
      todoItems: []
    }
  },
  methods: {
    addItem: function(todoItem){
      const obj = {completed: false, item: todoItem};
      if(this.newTodoItem !== ''){
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
      }
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i<localStorage.length; i++){
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
        this.todoItems.push(obj)
      }
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #eee;
  }
  input {
    border-style: #eee;
    width: 200px;
  }
  button {
    border-style:#eee;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
  }


</style>