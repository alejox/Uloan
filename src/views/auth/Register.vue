<template>
  <section class="signIn">
    <img class="signIn__img" src="@/assets/img/Uloan.svg" alt="" />
    <div class="form signIn__form">
      <h2 class="title">Enter your email to create an account</h2>
      <BaseInput text="Email" type="email" placeholder="mail@example.com" />
      <p class="principalText">Protecting your personal information is our priority. <br> <a href="#">See our privacy measures.</a> </p>
    </div>
    <ButtonColor @click="$router.push({path:`signInCode`})" class="signIn__btn" text="Continue" />
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