<template>
  <ul>
    <li class="shadow" v-for="(item, idx) in todoItem" v-bind:key="item">
      {{ item }}
      <span class="removeBtn" v-on:click="removeTodo(item, idx)">
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
      localStorage.removeItem(item);
      this.todoItem.splice(idx, 1);
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i<localStorage.length; i++){
       this.todoItem.push(localStorage.key(i))
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
  .checkBtnCompleted {
    color: #b3adad
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
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
</style>