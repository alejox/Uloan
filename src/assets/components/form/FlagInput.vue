<template>
  <div>
    <vue-tel-input v-model="value" v-bind="bindProps"></vue-tel-input>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  components: {},
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props) {
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
      value,
    };
  },
};
</script>
<style lang="scss">
.vue-tel-input {
  background: none;
  margin-bottom: 15px;
  border: none;
  outline: none;
  box-shadow: none !important;
  > div {
    border-radius: 8px;

    padding: 14px;
    margin-right: 20px;
    background-color: #f6f8fa;
  }
  input {
    border-radius: 8px;

    padding: 14px;
    background-color: #f6f8fa;
  }
}
</style>
