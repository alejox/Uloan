<template>
  <div>
    <label :class="text ? '' : 'opacity'" class="label"
      ><span class="span" v-if="require">* </span>{{ text }}</label
    >
    <textarea name="w3review" rows="4" cols="50">
      
</textarea
    >
  </div>
</template>

<script setup>
import BaseInput from "./BaseInput.vue";
defineProps({
  text: String,
  require: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  color: #000626;
  background-color: #f6f8fa;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: left;

  &::placeholder {
    font-weight: 300;
    color: $color-secondary;
  }
}

.label {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  &.opacity {
    opacity: 0;
  }
}

.span {
  color: #ff4e78;
}
</style>