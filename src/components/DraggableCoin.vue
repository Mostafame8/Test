<template>
  <transition>
    <draggable>
      <div class="draggable-coin">
        <img src="../assets/draggable/coin-silver.png" alt="Silver Coin" />
      </div>
    </draggable>
  </transition>
</template>

<script>
export default {
  name: 'DraggableCoin',
};
</script>

<style scoped>
.draggable-coin img {
  height: 60px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}
img:hover {
  height: 65px;
}
</style>
