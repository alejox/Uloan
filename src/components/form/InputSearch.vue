<template>
  <article id="search">
    <base-input
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    ></base-input>
  </article>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
export default {
  components: { BaseInput },
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style lang="scss">
#search {
  input {
    padding-left: 40px;
    min-width: 300px;
    width: 20%;
    background-image: url("@/assets/img/Search.svg");
    background-repeat: no-repeat;
    background-position: 2% center;
    background-color: #fff;
    @media (max-width: 320px) {
      min-width: 260px;
    }
  }
}
</style>