<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
          
        </div>
      </div>
    </div>
  </transition>
</template>

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