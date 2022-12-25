import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch(){
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        arr.push(obj);
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
    headerText: 'TODO IT!!'
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
  },

  mutations: {
    addItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      const {value: {item}, idx} = payload;
      localStorage.removeItem(item);
      state.todoItems.splice(idx, 1);
    },
    toggleOneItem(state, payload) {
      const {value: {item}, idx} = payload;
      state.todoItems[idx].completed = !state.todoItems[idx].completed;
      localStorage.removeItem(item);
      localStorage.setItem(item, JSON.stringify(item));

    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  }
});
