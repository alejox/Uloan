<template>
  <div>
    <label v-if="text" class="label"
      ><span class="span" v-if="require">* </span>{{ text }}</label
    >
    <select
      name="select"
      :value="modelValue || options[0]"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
    >
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    text: {
      type: String,
    },
    require: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
    },
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>
<style lang="scss" scoped>
select {
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: left;
  color: #7f8894;
  width: 100%;
  padding: 8px 16px;
  background: #F6F8FA;
border-radius: 8px;

  border: none;
  outline: none;
  option {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: #7f8894;
  }
}

.label {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
}

.span {
  color: #ff4e78;
}
</style>