<template>
  <button v-bind="$attrs">
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
defineProps({
  text:String,
  disabled: false,
});

</script>

<style lang="scss" scoped>
button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding:12px 16px;
  gap: 10px;
  background: $color-btn-p;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  &.white{
    background: #fff;
    color: $color-btn-p;
  }
  &.border{
    background: #fff;
    color: $color-btn-p;
    border: 1px solid $color-btn-p;
  }
}

span{
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}
</style>