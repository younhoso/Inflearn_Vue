<template>
  <ul>
    <li v-for="item in todoItem" v-bind:key="item">
      {{ item }}
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
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i<localStorage.length; i++){
       this.todoItem.push(localStorage.key(i))
      }
    }
  }
}
</script>

<style>

</style>