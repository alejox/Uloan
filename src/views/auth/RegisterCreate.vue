<template>
  <section class="register">
    <GoBack class="register__back"/>
    <img class="register__img" src="@/assets/img/Uloan.svg" alt="" />
    <div class="form register__form">
      <h2 class="title">Enter your email to create an account</h2>
      <BaseInput text="Email" type="email" placeholder="mail@example.com" />
      <p class="principalText">Protecting your personal information is our priority. <a class="register__link" href="#">See our privacy measures.</a> </p>
    </div>
    <ButtonColor @click="$router.push({path:`register`})" class="register__btn" text="Continue" />
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