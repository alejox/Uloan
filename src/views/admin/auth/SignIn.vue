<template>
  <section class="signIn container">
    <img class="signIn__img" src="@/assets/img/Uloan.svg" alt="" />
    <div class="form signIn__form">
      <h2 class="title">Welcome</h2>
      <BaseInput text="Email" type="email" placeholder="mail@example.com" />
      <BaseInput text="Password" type="password" placeholder="Password" />
        <a class="link text-center" @click="$router.push({path:`forgotPassword`})">Forgot Password</a>
    <ButtonColor @click="$router.push({path:`signInCode`})" class="signIn__btn" text="Login" />
    </div>
    <a class="link" @click="$router.push({path:`registerCreate`})">Register</a>

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
  padding-bottom: 20px;
  &__img {
    display: block;
    margin: 20% auto;
  }
  &__btn {
    margin-bottom: 20px;
  }
  &__form{
    margin-bottom: 100px;
  }
}
</style>