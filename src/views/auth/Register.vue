<template>
  <section class="signIn">
    <img class="signIn__img" src="@/assets/img/Uloan.svg" alt="" />
    <div class="form signIn__form">
      <h2 class="title">Enter your email to create an account</h2>
      <BaseInput text="Email" type="email" placeholder="mail@example.com" />
      <BaseInput text="Password" type="password" placeholder="Password" />
      <div class="flex">
        <a class="link">Forgot Password</a>
        <a class="link">Register</a>
      </div>
    </div>
    <ButtonColor @click="$router.push({path:`signInCode`})" class="signIn__btn" text="Login" />
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
</script>

<style lang="scss" scoped>
.signIn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  &__img {
    display: block;
    margin: 30% auto;
  }
  &__btn {
    margin-bottom: 20px;
  }
  &__form{
    margin-bottom: 100px;
  }
}
</style>