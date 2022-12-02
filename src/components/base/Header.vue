<template>
  <section class="header">
    <h2 class="subtitle header__subtitle">{{$route.name}}</h2>

    <div class="header__box">
      <div class="header__box__select">
        <img :src="`src/assets/svg/${language}.svg`" alt="" />
        <select
          class="header__box-lang"
          name="lang"
          id="lang"
          @change="dataIcon($event.target.value)"
        >
          <option value="us">EN</option>
          <option value="es">ES</option>
        </select>
      </div>

      <div class="header__box">
        <div class="header__box__select">
          <img class="header__user-img" src="@/assets/svg/user.svg" alt="" />
          <p>FullName</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const language = ref("us");


const dataIcon = (value) => {
  language.value = value;
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 16px 64px;
  background: #fff;
  align-items: center;
  &__subtitle{
    text-transform: capitalize;
  }
  &__box {
    display: flex;
    gap: 16px;
    align-items: center;
    &__select {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      background: #f6f8fa;
      border-radius: 8px;
    }
    &-lang {
      border: none;
      outline: none;
      background: transparent;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: #f6f8fa;
    border-radius: 8px;
    &-img {
      background-color: $color-green;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      padding: 4px;
    }
  }
}


</style>