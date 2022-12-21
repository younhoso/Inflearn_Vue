<template>
  <ul>
    <li v-for="(value, idx) in todoItem" v-bind:key="value" class="shadow" >
      <i class="ic-check checkBtn" v-bind:class="{checkBtnCompleted: value.completed}" v-on:click="toggleComplete(value, idx)"></i>
      <span v-bind:class="{textCompleted: value.completed}">{{ value.item }}</span>
      <span class="removeBtn" v-on:click="removeTodo(value, idx)">
        <i class="ic-bin"></i>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data: function (){
    return {
      todoItem: []
    }
  },
  methods: {
    removeTodo: function(item, idx){
      localStorage.removeItem(item.item);
      this.todoItem.splice(idx, 1);
    },
    toggleComplete: function(item, idx) {
       item.completed = !item.completed;
       localStorage.removeItem(item.item);
       localStorage.setItem(item.item, JSON.stringify(item))
    },
  },
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i<localStorage.length; i++){
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
        this.todoItem.push(obj)
      }
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
    justify-content: space-between;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    color: #de4343;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
</style>