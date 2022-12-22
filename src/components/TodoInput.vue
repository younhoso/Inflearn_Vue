<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>

    <span v-on:click="addTodo" class="addContainer">
      <i class="ic-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <div class="showModal" slot="body">
        <p>모달입니다.</p>
        <div class="modal-footer">
          <button class="modal-default-button" @click="showModal = false">OK</button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data: function(){
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo: function(){
      if(this.newTodoItem !== ''){
        this.$emit('addTodoItme', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
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

  .showModal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
  }
</style>