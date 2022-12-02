<template>
  <button :disabled="disabled" v-bind="$attrs">
    <span v-if="$store.state.loading == false">
      {{label}}
    </span>
    <span v-else>
      Loading...
    </span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    disabled: {
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
button:disabled,
button[disabled] {
  opacity: .2;
}
  button{
    display: block;
    width: 100%;
    margin: 25px 0;
    padding: 10px;
    border-radius: 8px;
    background: linear-gradient(180deg, rgb(15, 33, 92) 0%, rgb(0, 122, 209) 100%);
    color: white;
    font-weight: 600;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: all 1s;
    &:hover{
      background: linear-gradient(180deg, rgb(15, 33, 92) 0%, rgb(2, 45, 77) 100%);
      transition: all 1s;
    }
    &.transparent{
      background: none;
      color: #0F2460;
      &:hover{
        background: none;
      }
    }
    &.outline{
      background: none;
      border:1px solid #0F2460;
      color:#0F2460;
    }
  }
</style>