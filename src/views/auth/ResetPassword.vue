<template>
  <section class="register">
    <GoBack class="register__back"/>
    <img class="register__img" src="@/assets/img/Uloan.svg" alt="" />
    <div class="form register__form">
      <h2 class="title">Reset Password</h2>
      <p class="secondaryText">Set  new password that different from previous password for your account</p>
      <BaseInput text="password" type="password" placeholder="Password" />
      <BaseInput text="Confirm password" type="password" placeholder="Password" />
    </div>
    <ButtonColor @click="$router.push({path:`passwordSuccess`})" class="register__btn" text="Send" />
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
    margin-bottom: 100px;
  }
  &__link{
    color: $color-btn-p;
  }
  &__back{
    margin-top: 24px;
  }
}
</style>