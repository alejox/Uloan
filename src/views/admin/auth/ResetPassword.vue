<template>
    <GoBack class="register__back"/>
  <section class="register container">
    <div class="form register__form">
      <h2 class="title">Nueva contraseña</h2>
      <p class="secondaryText">The password must cointain: 1 capital letter, 1 number, 1 special character, minimum characters</p>
      <BaseInput text="password" type="password" placeholder="Password" />
      <BaseInput text="Confirm password" type="password" placeholder="Password" />
      <ButtonColor @click="$router.push({path:`passwordSuccess`})" class="register__btn" text="Send" />
    </div>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from '@/components/base/GoBack.vue'
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  &__img {
    display: block;
    margin: 10% auto;
  }
  &__btn {
    margin-bottom: 20px;
  }
  &__form{
    padding-top: 50px;
    margin-bottom: 100px;
  }
  &__link{
    color: $color-btn-p;
  }
  &__back{
    margin-top: 24px;
    margin-left: 24px;
  }
}
</style>