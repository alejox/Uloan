<template>
  <div>
    <label :class="text ? '':'opacity'" class="label"><span class="span" v-if="require">* </span>{{ text }}</label>
    <BaseInput v-bind="$attrs" />
  </div>
</template>

<script setup>
import BaseInput from "./BaseInput.vue";
defineProps({
  text: String,
  require: {
    type: Boolean,
    default : true
  }
});
</script>

<style lang="scss" scoped>
.label {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  &.opacity{
    opacity: 0;
  }
}

.span {
  color: #ff4e78;
}
</style>