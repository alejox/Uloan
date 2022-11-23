<template>
  <button v-bind="$attrs">
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
defineProps({
  text: String,
  disabled: false,
});
</script>

<style lang="scss" scoped>
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  background: #fff;
  border-radius: 8px;
  border: none;
  width: 100%;
  cursor: pointer;
}

span {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: $color-btn-p;
}
</style>