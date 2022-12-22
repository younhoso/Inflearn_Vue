<template>
  <div>
    <button v-on:click="propsopen = true">모달 열기</button>

    <div class="modal" v-if="propsopen">
      <p>짜자잔~ 모달입니다!</p>
      <button v-on:click="propsopen = false">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['propsopen']
}
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
}
</style>