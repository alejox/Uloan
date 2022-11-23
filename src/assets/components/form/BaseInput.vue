<template>
  <article class="input">
    <label class="input__label">
      <span v-if="require">* </span>{{ text }}</label
    >
    <input
      class="input__input"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </article>
</template>

<script setup>
defineProps({
  text: String,
  require: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: [String, Number],
  },
});
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 8px;
  &__label {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    span {
      color: #ff4e78;
    }
  }
  &__input {
    padding: 12px 16px;
    border-radius: 4px;
    border: none;
    background-color: #fff;
    border: 1px solid #eef0f1;
  }
}
</style>