<template>
  <article class="back" @click="$router.back()">
    <img class="back__img" src="@/assets/img/arrow.svg" alt="" />
  </article>
</template>

<script>
</script>

<style lang="scss" scoped>
.back {
  cursor: pointer;
  &.color {
    display: flex;
    padding: 4px;
    gap: 10px;
    width: 32px;
    height: 32px;
    background: #ffffff;
    border-radius: 100px;
    justify-content: center;
    align-content: center;
  }
  &__img {
    width: 14px;
  }
}
</style>