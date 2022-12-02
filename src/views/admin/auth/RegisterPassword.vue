<template>
  <section class="pass container">
    <div class="form pass__form">
      <GoBack class="pass__back" />
      <h2 class="subtitle pass__subtitle">Password</h2>
      <BaseInput text="Password" type="Password" placeholder="Password" />
      <BaseInput text="Confirm password" type="Password" placeholder="Password" />
    </div>
    <ButtonColor
      @click="$router.push({ path: `registerSuccess` })"
      class="pass__btn"
      text="Sign in"
    />
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
</script>

<style lang="scss" scoped>
.pass {
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
  &__form {
    margin-bottom: 100px;
  }
  &__link {
    color: $color-btn-p;
  }
  &__back {
    margin-top: 24px;
  }
  &__subtitle {
    margin-bottom: 36px;
  }
}
</style>