import Vue from "vue";
import Vuex from "Vuex";

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
  }
});
