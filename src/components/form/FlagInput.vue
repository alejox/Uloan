<template>
  <vue-tel-input
    v-model="modelValue"
    v-bind="bindProps"
    @input="$emit('update:modelValue', $event.target.value)"
  ></vue-tel-input>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { defineEmits } from "vue";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });
    const phone = ref("0123456789");
    const bindProps = {
      defaultCountry: "CO",
      placeholder: "Enter a phone number",
      required: false,
      preferredCountries: ["CO", "BR"],
      name: "telephone",
      dropdownOptions: {
        disabledDialCode: true,
        showFlags: true,
      },
      inputOptions: {
        showDialCode: true,
      },
    };
    return {
      phone,
      bindProps,
    };
  },
};
</script>
<style lang="scss">
.vue-tel-input {
  border: none;
  outline: none;
  box-shadow: none !important;
  font-size: 14px;
  > div {
    border-radius: 8px;
    padding: 14px;
    margin-right: 20px;
    background-color: #fff;
    border: 1px solid #eef0f1;
  }
  input {
    border-radius: 8px;

    padding: 12px 16px;
    background-color: #fff;
    border: 1px solid #eef0f1;
    border-radius: 4px;
  }
}
</style>