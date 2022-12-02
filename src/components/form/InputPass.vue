<template>
  <div class="InputPass">
    <BaseInput
      :value="modelValue"
      :placeholder="label"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="show"
    ></BaseInput>
    <div class="InputPass__img" @click="showpass" :class="show">
      <img src="/src/assets/img/EyeVisible.svg" alt=""  />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import BaseInput from "./BaseInput.vue";
export default {
  components: { BaseInput },
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
  setup() {
    const show = ref("password");
    const showpass = () => {
      const type = {
        text: "password",
        password: "text",
      };
      show.value = type[show.value];
    };
    return {
      show,
      showpass,
    };
  },
};
</script>

<style lang="scss" scoped>
.InputPass {
  position: relative;
  &__img{
    position: absolute;
    top: 50%;
    left: 95%;
    transform: translate(-95%, -50%);
    cursor: pointer;
    &::after {
      content: none;
      position: absolute;
      width: 2px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      height: 100%;
      background:  $color-primary;
    }
    &.password{
      &::after{
        content: "";
      }
    }
    
  }
}
</style>